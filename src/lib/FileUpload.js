'use client';
import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import {
  Button,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
  Paper,
  TextField,
  Box
} from '@mui/material';
import { CloudUpload, Delete, Folder } from '@mui/icons-material';

export default function FileUploadComponent({ 
  onUploadSuccess,
  defaultFolder = '/public/testing' // Default folder if not specified
}) {
  const [file, setFile] = useState(null);
  const [folder, setFolder] = useState(defaultFolder);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadResponse, setUploadResponse] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleFolderChange = (e) => {
    setFolder(e.target.value);
  };

  const uploadFile = useCallback(async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    if (!folder) {
      setError('Please specify a folder');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
          const token = typeof window !== 'undefined' ? Cookies.get('token') : null;
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      const response = await fetch(process.env.NEXT_PUBLIC_UPLOAD_FILE_API, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'File upload failed');
      }

      setUploadResponse(result);
      if (onUploadSuccess) {
        onUploadSuccess(result.path); // Send back just the path
      }
    } catch (err) {
      setError(err.message);
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  }, [file, folder, onUploadSuccess]);

  const handleRemoveFile = () => {
    setFile(null);
    setUploadResponse(null);
    setError(null);
  };

  return (
    <Paper variant="outlined" sx={{ p: 3, width: '100%' }}>
      <Stack spacing={2}>
        <Typography variant="h6">File Upload</Typography>
        
        {/* Folder Input */}
        <TextField
          fullWidth
          label="Folder Path"
          value={folder}
          onChange={handleFolderChange}
          InputProps={{
            startAdornment: (
              <Folder color="action" sx={{ mr: 1 }} />
            ),
          }}
          helperText="Example: /public/events"
        />

        {/* File Selection */}
        {!file ? (
          <>
            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUpload />}
            >
              Select File
             <input
  type="file"
  hidden
  onChange={handleFileChange}
  accept="image/*,.pdf,.doc,.docx,video/mp4,video/webm,video/ogg"
/>

            </Button>
            <Typography variant="caption">
              Supported formats: images, PDF, Word documents
            </Typography>
          </>
        ) : (
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>
              Selected: {file.name} ({Math.round(file.size / 1024)} KB)
            </Typography>
            <IconButton onClick={handleRemoveFile} color="error">
              <Delete />
            </IconButton>
          </Stack>
        )}

        {/* Upload Button */}
        {file && !uploadResponse && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={uploadFile}
              disabled={isUploading || !folder}
              startIcon={isUploading ? <CircularProgress size={20} /> : null}
              sx={{ minWidth: 120 }}
            >
              {isUploading ? 'Uploading...' : 'Upload'}
            </Button>
          </Box>
        )}

        {/* Upload Results */}
        {uploadResponse && (
          <Typography color="success.main">
            Upload successful! Path: {uploadResponse.path}
          </Typography>
        )}

        {/* Error Display */}
        {error && (
          <Typography color="error">{error}</Typography>
        )}
      </Stack>
    </Paper>
  );
}