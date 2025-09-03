'use client';
import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Snackbar, 
  Alert,
  IconButton,
  Chip,
  Stack,
  TablePagination,
  Avatar,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { 
  Add, 
  Edit, 
  Delete, 
  Close,
  Publish,
  Unpublished,
  Restore,
  DeleteForever,
  Videocam,
  Image as ImageIcon,
  Link
} from '@mui/icons-material';
import FileUploadComponent from '@/lib/FileUpload';
import { api } from '@/lib/api';

export default function GalleryManagement() {
  const [galleries, setGalleries] = useState([]);
  const [totalGalleries, setTotalGalleries] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentGallery, setCurrentGallery] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [galleryToDelete, setGalleryToDelete] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    HiName: '',
    EnName: '',
    slug: '',
    HiDescription: '',
    EnDescription: '',
    type: 'image',
    mediaItems: [],
    uploadDate: new Date().toISOString().split('T')[0],
    isFeatured: false,
    displayOrder: 1,
    isActive: true,
    coverImage: ''
  });

  // Fetch galleries with pagination and search/filter
  const fetchGalleries = async () => {
    try {
      setLoading(true);
      let url = `/ImageGallery?page=${page + 1}&limit=${rowsPerPage}`;
      
      if (searchTerm) {
        url += `&search=${searchTerm}`;
      }
      
      if (filter !== 'all') {
        if (filter === 'active') url += '&isActive=true';
        if (filter === 'inactive') url += '&isActive=false';
        if (filter === 'deleted') url += '&isDeleted=true';
      }

      const response = await api.get(url);
      setGalleries(response.data.data || response.data);
      setTotalGalleries(response.data.total || response.data.length);
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to fetch galleries', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Debounce search
  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchGalleries();
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm, filter, page, rowsPerPage]);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  // Handle media item upload
  const handleMediaUpload = (filePath) => {
    setFormData(prev => ({
      ...prev,
      mediaItems: [...prev.mediaItems, { 
        link: filePath,
        HiCaption: '',
        EnCaption: '',
        displayOrder: prev.mediaItems.length + 1,
        uploadDate: new Date().toISOString()
      }]
    }));
  };

  // Handle cover image upload
  const handleCoverImageUpload = (filePath) => {
    setFormData(prev => ({ 
      ...prev, 
      coverImage: filePath 
    }));
  };

  // Add YouTube video link
  const handleAddYoutubeLink = () => {
    if (youtubeLink.trim()) {
      setFormData(prev => ({
        ...prev,
        mediaItems: [...prev.mediaItems, { 
          link: youtubeLink,
          HiCaption: '',
          EnCaption: '',
          displayOrder: prev.mediaItems.length + 1,
          uploadDate: new Date().toISOString()
        }]
      }));
      setYoutubeLink('');
    }
  };

  // Open dialog for creating/editing
  const handleOpenDialog = (galleryItem = null) => {
    if (galleryItem) {
      setCurrentGallery(galleryItem);
      setIsEditing(true);
      setFormData({
        HiName: galleryItem.HiName,
        EnName: galleryItem.EnName,
        slug: galleryItem.slug,
        HiDescription: galleryItem.HiDescription || '',
        EnDescription: galleryItem.EnDescription || '',
        type: galleryItem.type || 'image',
        mediaItems: galleryItem.mediaItems || [],
        uploadDate: galleryItem.uploadDate ? new Date(galleryItem.uploadDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        isFeatured: galleryItem.isFeatured || false,
        displayOrder: galleryItem.displayOrder || 1,
        isActive: galleryItem.isActive,
        coverImage: galleryItem.coverImage || ''
      });
    } else {
      setCurrentGallery(null);
      setIsEditing(false);
      setFormData({
        HiName: '',
        EnName: '',
        slug: '',
        HiDescription: '',
        EnDescription: '',
        type: 'image',
        mediaItems: [],
        uploadDate: new Date().toISOString().split('T')[0],
        isFeatured: false,
        displayOrder: 1,
        isActive: true,
        coverImage: ''
      });
    }
    setOpenDialog(true);
  };

  // Close dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Submit form
  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        uploadDate: new Date(formData.uploadDate).toISOString()
      };

      if (isEditing) {
        await api.put(`/ImageGallery/${currentGallery._id}`, payload);
        setSnackbar({ open: true, message: 'Gallery updated successfully', severity: 'success' });
      } else {
        await api.post('/ImageGallery', payload);
        setSnackbar({ open: true, message: 'Gallery created successfully', severity: 'success' });
      }
      
      fetchGalleries();
      handleCloseDialog();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Operation failed', severity: 'error' });
    }
  };

  // Open delete confirmation dialog
  const openDeleteConfirm = (id) => {
    setGalleryToDelete(id);
    setDeleteConfirmOpen(true);
  };

  // Close delete confirmation dialog
  const closeDeleteConfirm = () => {
    setDeleteConfirmOpen(false);
    setGalleryToDelete(null);
  };

  // Delete gallery
  const handleDelete = async () => {
    try {
      await api.delete(`/ImageGallery/${galleryToDelete}`);
      setSnackbar({ open: true, message: 'Gallery deleted successfully', severity: 'success' });
      fetchGalleries();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Delete failed', severity: 'error' });
    } finally {
      closeDeleteConfirm();
    }
  };

  // Toggle active status
  const toggleActiveStatus = async (id, currentStatus) => {
    try {
      await api.put(`/ImageGallery/${id}`, { isActive: !currentStatus });
      setSnackbar({ 
        open: true, 
        message: `Gallery ${currentStatus ? 'deactivated' : 'activated'} successfully`, 
        severity: 'success' 
      });
      fetchGalleries();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Status update failed', severity: 'error' });
    }
  };

  // Render media preview based on type
  const renderMediaPreview = (media) => {
    if (formData.type === 'video' || media.link.match(/youtube\.com|youtu\.be/i)) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Videocam color="primary" />
          <Typography variant="body2" sx={{ 
            maxWidth: 200, 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            whiteSpace: 'nowrap' 
          }}>
            {media.link}
          </Typography>
        </Box>
      );
    } else if (media.link.match(/\.(mp4|webm|ogg)$/i)) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Videocam color="primary" />
          <span>Video File</span>
        </Box>
      );
    } else {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar 
            src={`${process.env.NEXT_PUBLIC_STORAGE}${media.link}`}
            variant="square" 
            sx={{ width: 24, height: 24 }} 
          />
          <span>Image</span>
        </Box>
      );
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gallery Management
      </Typography>
      
      {/* Search and Filter */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Search Galleries"
          variant="outlined"
          size="small"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name or slug..."
        />
        
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel>Filter</InputLabel>
          <Select
            value={filter}
            label="Filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="all">All Galleries</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
            <MenuItem value="deleted">Deleted</MenuItem>
          </Select>
        </FormControl>
        
        <Button 
          variant="contained" 
          startIcon={<Add />}
          onClick={() => handleOpenDialog()}
        >
          New Gallery
        </Button>
      </Box>

      {/* Gallery Table */}
      <Paper sx={{ overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name (EN)</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Media Count</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : galleries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No galleries found
                  </TableCell>
                </TableRow>
              ) : (
                galleries.map((gallery) => (
                  <TableRow key={gallery._id}>
                    <TableCell>
                      <Box>
                        <Typography>{gallery.EnName}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {gallery.slug}
                          {gallery.isFeatured && ' • Featured'}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={gallery.type} 
                        size="small" 
                        color={gallery.type === 'video' ? 'primary' : 'default'}
                      />
                    </TableCell>
                    <TableCell>
                      {gallery.mediaItems?.length || 0} items
                    </TableCell>
                    <TableCell>
                      {gallery.isDeleted ? (
                        <Chip label="Deleted" color="error" size="small" />
                      ) : gallery.isActive ? (
                        <Chip label="Active" color="success" size="small" />
                      ) : (
                        <Chip label="Inactive" size="small" />
                      )}
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <IconButton 
                          size="small" 
                          color="info" 
                          onClick={() => handleOpenDialog(gallery)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        
                        {!gallery.isDeleted && (
                          <IconButton
                            size="small"
                            color={gallery.isActive ? 'secondary' : 'default'}
                            onClick={() => toggleActiveStatus(gallery._id, gallery.isActive)}
                          >
                            {gallery.isActive ? (
                              <Unpublished fontSize="small" />
                            ) : (
                              <Publish fontSize="small" />
                            )}
                          </IconButton>
                        )}
                        
                        {gallery.isDeleted ? (
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => openDeleteConfirm(gallery._id)}
                          >
                            <DeleteForever fontSize="small" />
                          </IconButton>
                        ) : (
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => openDeleteConfirm(gallery._id)}
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        )}
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalGalleries}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Create/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {isEditing ? 'Edit Gallery' : 'Create New Gallery'}
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
            {/* English Name */}
            <TextField
              label="English Name"
              name="EnName"
              value={formData.EnName}
              onChange={handleChange}
              fullWidth
              required
            />
            
            {/* Hindi Name */}
            <TextField
              label="Hindi Name"
              name="HiName"
              value={formData.HiName}
              onChange={handleChange}
              fullWidth
              required
            />
            
            {/* Slug */}
            <TextField
              label="Slug (URL Identifier)"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              fullWidth
              required
            />
            
            {/* English Description */}
            <TextField
              label="English Description"
              name="EnDescription"
              value={formData.EnDescription}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
            />
            
            {/* Hindi Description */}
            <TextField
              label="Hindi Description"
              name="HiDescription"
              value={formData.HiDescription}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
            />
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              {/* Gallery Type */}
              <FormControl fullWidth>
                <InputLabel>Gallery Type</InputLabel>
                <Select
                  name="type"
                  value={formData.type}
                  label="Gallery Type"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="image">Image Gallery</MenuItem>
                  <MenuItem value="video">Video Gallery</MenuItem>
                </Select>
              </FormControl>
              
              {/* Upload Date */}
              <TextField
                label="Upload Date"
                name="uploadDate"
                type="date"
                value={formData.uploadDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
              />
              
              {/* Display Order */}
              <TextField
                label="Display Order"
                name="displayOrder"
                type="number"
                value={formData.displayOrder}
                onChange={handleChange}
                fullWidth
                required
              />
            </Box>
            
            {/* Checkboxes */}
            <Box sx={{ display: 'flex', gap: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isFeatured}
                    onChange={handleChange}
                    name="isFeatured"
                  />
                }
                label="Featured"
              />
              
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isActive}
                    onChange={handleChange}
                    name="isActive"
                  />
                }
                label="Active"
              />
            </Box>
            
            {/* Cover Image Upload */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Cover Image (Thumbnail)
              </Typography>
              {formData.coverImage ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={`${process.env.NEXT_PUBLIC_STORAGE}${formData.coverImage}`}
                    variant="square" 
                    sx={{ width: 60, height: 60 }} 
                  />
                  <IconButton 
                    size="small" 
                    onClick={() => setFormData(prev => ({ 
                      ...prev, 
                      coverImage: ''
                    }))}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              ) : (
                <FileUploadComponent 
                  onUploadSuccess={handleCoverImageUpload}
                  defaultFolder="/public/ImageGallery/Covers"
                  accept="image/*"
                />
              )}
            </Box>
            
            {/* Media Items Section */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                {formData.type === 'video' ? 'Videos' : 'Images'} ({formData.mediaItems.length})
              </Typography>
              
              {formData.mediaItems.map((media, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1, 
                    mb: 1,
                    p: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1
                  }}
                >
                  <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                    {renderMediaPreview(media)}
                    
                    <TextField
                      label="English Caption"
                      value={media.EnCaption}
                      onChange={(e) => {
                        const newMedia = [...formData.mediaItems];
                        newMedia[index].EnCaption = e.target.value;
                        setFormData(prev => ({ ...prev, mediaItems: newMedia }));
                      }}
                      size="small"
                      sx={{ width: 150 }}
                    />
                    <TextField
                      label="Hindi Caption"
                      value={media.HiCaption}
                      onChange={(e) => {
                        const newMedia = [...formData.mediaItems];
                        newMedia[index].HiCaption = e.target.value;
                        setFormData(prev => ({ ...prev, mediaItems: newMedia }));
                      }}
                      size="small"
                      sx={{ width: 150 }}
                    />
                    <TextField
                      label="Order"
                      type="number"
                      value={media.displayOrder}
                      onChange={(e) => {
                        const newMedia = [...formData.mediaItems];
                        newMedia[index].displayOrder = parseInt(e.target.value);
                        setFormData(prev => ({ ...prev, mediaItems: newMedia }));
                      }}
                      size="small"
                      sx={{ width: 80 }}
                    />
                  </Box>
                  
                  <IconButton 
                    size="small" 
                    onClick={() => {
                      const newMedia = [...formData.mediaItems];
                      newMedia.splice(index, 1);
                      setFormData(prev => ({ ...prev, mediaItems: newMedia }));
                    }}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              ))}
              
              {formData.type === 'video' ? (
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <TextField
                    label="YouTube Video URL"
                    value={youtubeLink}
                    onChange={(e) => setYoutubeLink(e.target.value)}
                    fullWidth
                    size="small"
                    placeholder="https://www.youtube.com/watch?v=..."
                    InputProps={{
                      startAdornment: <Link sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                  />
                  <Button 
                    variant="contained" 
                    onClick={handleAddYoutubeLink}
                    disabled={!youtubeLink.trim()}
                  >
                    Add
                  </Button>
                </Box>
              ) : (
                <FileUploadComponent 
                  onUploadSuccess={handleMediaUpload}
                  defaultFolder="/public/ImageGallery/Images"
                  accept="image/*"
                  multiple
                />
              )}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {isEditing ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteConfirmOpen}
        onClose={closeDeleteConfirm}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this gallery? This action cannot be undone.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteConfirm}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}