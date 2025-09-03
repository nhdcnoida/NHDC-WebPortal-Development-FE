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
  Link,
  Checkbox,
  FormControlLabel,
   
} from '@mui/material';
import { 
  Add, 
  Edit, 
  Delete, 
  Visibility, 
  Close,
  Publish,
  Unpublished,
  Restore,
  DeleteForever,
  PictureAsPdf,
  Image
} from '@mui/icons-material';
import FileUploadComponent from '@/lib/FileUpload';
import { api } from '@/lib/api';

export default function NewsManagement() {
  const [news, setNews] = useState([]);
  const [totalNews, setTotalNews] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [newsToDelete, setNewsToDelete] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    HiName: '',
    EnName: '',
    HiDescription: '',
    EnDescription: '',
    uploadDate: '',
    closingDate: '',
    isNews: false,
    isPDF: false,
    isCustomLink: false,
    mainFileLink: '',
    subFileLinks: [],
    newsType: 'general',
    isFeatured: false,
    displayOrder: 1,
    isActive: true,
     isNew: false
  });

  // Fetch news with pagination and search/filter
  const fetchNews = async () => {
    try {
      setLoading(true);
      let url = `/News?page=${page + 1}&limit=${rowsPerPage}`;
      
      if (searchTerm) {
        url += `&search=${searchTerm}`;
      }
       url += '&sort=-uploadDate';
      
      if (filter !== 'all') {
        if (filter === 'active') url += '&isActive=true';
        if (filter === 'inactive') url += '&isActive=false';
        if (filter === 'deleted') url += '&isDeleted=true';
      }

      const response = await api.get(url);
      setNews(response.data.data || response.data);
      setTotalNews(response.data.total || response.data.length);
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to fetch news', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Debounce search
  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchNews();
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

   // Handle form input changes
  const handleisNewChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };
  // Handle file upload for main file
  const handleMainFileUpload = (filePath) => {
    setFormData(prev => ({ 
      ...prev, 
      mainFileLink: filePath,
      isPDF: filePath.toLowerCase().endsWith('.pdf')
    }));
  };

  // Handle file upload for sub files
  const handleSubFileUpload = (filePath) => {
    setFormData(prev => ({
      ...prev,
      subFileLinks: [...prev.subFileLinks, { 
        HiName: '', 
        EnName: '', 
        link: filePath,
        isPDF: filePath.toLowerCase().endsWith('.pdf'),
        isNews: false,
        isCustomLink: false
      }]
    }));
  };

  // Open dialog for creating/editing
  const handleOpenDialog = (newsItem = null) => {
    if (newsItem) {
      setCurrentNews(newsItem);
      setIsEditing(true);
      setFormData({
        HiName: newsItem.HiName,
        EnName: newsItem.EnName,
        HiDescription: newsItem.HiDescription,
        EnDescription: newsItem.EnDescription,
        uploadDate: newsItem.uploadDate ? new Date(newsItem.uploadDate).toISOString().split('T')[0] : '',
        closingDate: newsItem.closingDate ? new Date(newsItem.closingDate).toISOString().split('T')[0] : '',
        isNews: newsItem.isNews || false,
        isPDF: newsItem.isPDF || false,
        isCustomLink: newsItem.isCustomLink || false,
        mainFileLink: newsItem.mainFileLink,
        subFileLinks: newsItem.subFileLinks || [],
        newsType: newsItem.newsType || 'general',
        isFeatured: newsItem.isFeatured || false,
        displayOrder: newsItem.displayOrder || 1,
        isActive: newsItem.isActive,
          isNew: newsItem.isNew || false
      });
    } else {
      setCurrentNews(null);
      setIsEditing(false);
      setFormData({
        HiName: '',
        EnName: '',
        HiDescription: '',
        EnDescription: '',
        uploadDate: '',
        closingDate: '',
        isNews: false,
        isPDF: false,
        isCustomLink: false,
        mainFileLink: '',
        subFileLinks: [],
        newsType: 'general',
        isFeatured: false,
        displayOrder: 1,
        isActive: true,
          isNew: false
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
        closingDate: new Date(formData.closingDate).toISOString(),
        uploadDate: formData.uploadDate ? new Date(formData.uploadDate).toISOString() : new Date().toISOString()
      };

      if (isEditing) {
        await api.put(`/News/${currentNews._id}`, payload);
        setSnackbar({ open: true, message: 'News updated successfully', severity: 'success' });
      } else {
        await api.post('/News', payload);
        setSnackbar({ open: true, message: 'News created successfully', severity: 'success' });
      }
      
      fetchNews();
      handleCloseDialog();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Operation failed', severity: 'error' });
    }
  };

  // Open delete confirmation dialog
  const openDeleteConfirm = (id) => {
    setNewsToDelete(id);
    setDeleteConfirmOpen(true);
  };

  // Close delete confirmation dialog
  const closeDeleteConfirm = () => {
    setDeleteConfirmOpen(false);
    setNewsToDelete(null);
  };

  // Delete news
  const handleDelete = async () => {
    try {
      await api.delete(`/News/${newsToDelete}`);
      setSnackbar({ open: true, message: 'News deleted successfully', severity: 'success' });
      fetchNews();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Delete failed', severity: 'error' });
    } finally {
      closeDeleteConfirm();
    }
  };

  // Toggle active status
  const toggleActiveStatus = async (id, currentStatus) => {
    try {
      await api.put(`/News/${id}`, { isActive: !currentStatus });
      setSnackbar({ 
        open: true, 
        message: `News ${currentStatus ? 'deactivated' : 'activated'} successfully`, 
        severity: 'success' 
      });
      fetchNews();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Status update failed', severity: 'error' });
    }
  };

  // Render file preview based on type
  const renderFilePreview = (file) => {
    if (file.isPDF) {
      return (
        <Link href={file.link} target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PictureAsPdf color="error" />
          <span>PDF Document</span>
        </Link>
      );
    } else if (file.link.match(/\.(jpeg|jpg|gif|png)$/i)) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar src={file.link} variant="square" sx={{ width: 24, height: 24 }} />
          <span>Image</span>
        </Box>
      );
    } else {
      return (
        <Link href={file.link} target="_blank" rel="noopener" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Image color="primary" />
          <span>View File</span>
        </Link>
      );
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        News Management
      </Typography>
      
      {/* Search and Filter */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Search News"
          variant="outlined"
          size="small"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name or reference number..."
        />
        
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel>Filter</InputLabel>
          <Select
            value={filter}
            label="Filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="all">All News</MenuItem>
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
          New News
        </Button>
      </Box>

      {/* News Table */}
      <Paper sx={{ overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name (EN)</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Upload Date</TableCell>
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
              ) : news.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No news found
                  </TableCell>
                </TableRow>
              ) : (
                news.map((newsItem) => (
                  <TableRow key={newsItem._id}>
                    <TableCell>
                      <Box>
                        <Typography>{newsItem.EnName}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {newsItem.isNews ? 'News' : 'Document'}
                          {newsItem.isFeatured && ' • Featured'}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip label={newsItem.newsType} size="small" />
                    </TableCell>
                    <TableCell>{new Date(newsItem.uploadDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {newsItem.isDeleted ? (
                        <Chip label="Deleted" color="error" size="small" />
                      ) : newsItem.isActive ? (
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
                          onClick={() => handleOpenDialog(newsItem)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        
                        {!newsItem.isDeleted && (
                          <IconButton
                            size="small"
                            color={newsItem.isActive ? 'secondary' : 'default'}
                            onClick={() => toggleActiveStatus(newsItem._id, newsItem.isActive)}
                          >
                            {newsItem.isActive ? (
                              <Unpublished fontSize="small" />
                            ) : (
                              <Publish fontSize="small" />
                            )}
                          </IconButton>
                        )}
                        
                        {newsItem.isDeleted ? (
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => openDeleteConfirm(newsItem._id)}
                          >
                            <DeleteForever fontSize="small" />
                          </IconButton>
                        ) : (
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => openDeleteConfirm(newsItem._id)}
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
          count={totalNews}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Create/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {isEditing ? 'Edit News' : 'Create New News'}
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
            
            {/* English Description */}
            <TextField
              label="English Description"
              name="EnDescription"
              value={formData.EnDescription}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
              required
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
              required
            />
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              {/* Closing Date */}
              <TextField
                label="Closing Date"
                name="closingDate"
                type="date"
                value={formData.closingDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                fullWidth
                required
              />
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
              
              {/* News Type */}
              <FormControl fullWidth>
                <InputLabel>News Type</InputLabel>
                <Select
                  name="newsType"
                  value={formData.newsType}
                  label="News Type"
                  onChange={handleChange}
                >
                  <MenuItem value="general">General</MenuItem>
                  <MenuItem value="press-release">Press Release</MenuItem>
                  <MenuItem value="announcement">Announcement</MenuItem>
                  <MenuItem value="event">Event</MenuItem>
                  <MenuItem value="achievement">Achievement</MenuItem>
                </Select>
              </FormControl>
              
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

               <FormControlLabel
                                            control={
                                              <Checkbox
                                                checked={formData.isNew}
                                                onChange={handleisNewChange}
                                                name="isNew"
                                              />
                                            }
                                            label="isNew"
                                          />
            </Box>
            
            {/* Checkboxes */}
            <Box sx={{ display: 'flex', gap: 3 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isNews}
                    onChange={handleChange}
                    name="isNews"
                  />
                }
                label="Is News"
              />
              
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
                    checked={formData.isCustomLink}
                    onChange={handleChange}
                    name="isCustomLink"
                  />
                }
                label="Custom Link"
              />
            </Box>
            
            {/* Main File Upload */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Main Document
              </Typography>
              {formData.mainFileLink ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {renderFilePreview({ 
                    link: formData.mainFileLink, 
                    isPDF: formData.isPDF 
                  })}
                  <IconButton size="small" onClick={() => setFormData(prev => ({ 
                    ...prev, 
                    mainFileLink: '',
                    isPDF: false
                  }))}>
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              ) : (
                <FileUploadComponent 
                  onUploadSuccess={handleMainFileUpload}
                  defaultFolder="/public/News"
                />
              )}
            </Box>
            
            {/* Sub Files Upload */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Additional Documents
              </Typography>
              
              {formData.subFileLinks.map((file, index) => (
                <Box key={index} sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  mb: 1,
                  p: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1
                }}>
                  <Box sx={{ flex: 1 }}>
                    {renderFilePreview(file)}
                  </Box>
                  
                  <TextField
                    label="English Name"
                    value={file.EnName}
                    onChange={(e) => {
                      const newFiles = [...formData.subFileLinks];
                      newFiles[index].EnName = e.target.value;
                      setFormData(prev => ({ ...prev, subFileLinks: newFiles }));
                    }}
                    size="small"
                    sx={{ width: 150 }}
                  />
                  <TextField
                    label="Hindi Name"
                    value={file.HiName}
                    onChange={(e) => {
                      const newFiles = [...formData.subFileLinks];
                      newFiles[index].HiName = e.target.value;
                      setFormData(prev => ({ ...prev, subFileLinks: newFiles }));
                    }}
                    size="small"
                    sx={{ width: 150 }}
                  />
                  
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={file.isNews}
                        onChange={(e) => {
                          const newFiles = [...formData.subFileLinks];
                          newFiles[index].isNews = e.target.checked;
                          setFormData(prev => ({ ...prev, subFileLinks: newFiles }));
                        }}
                      />
                    }
                    label="News"
                    sx={{ mr: 0 }}
                  />
                  
                  <IconButton 
                    size="small" 
                    onClick={() => {
                      const newFiles = [...formData.subFileLinks];
                      newFiles.splice(index, 1);
                      setFormData(prev => ({ ...prev, subFileLinks: newFiles }));
                    }}
                  >
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              ))}
              
              <FileUploadComponent 
                onUploadSuccess={handleSubFileUpload}
                defaultFolder="/public/News/Additional"
              />
            </Box>
            
            {/* Status Toggle */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2">Status:</Typography>
              <Chip 
                label={formData.isActive ? 'Active' : 'Inactive'} 
                color={formData.isActive ? 'success' : 'default'} 
                size="small"
              />
              <Button
                size="small"
                onClick={() => setFormData(prev => ({ ...prev, isActive: !prev.isActive }))}
              >
                {formData.isActive ? 'Deactivate' : 'Activate'}
              </Button>
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
          <Typography>Are you sure you want to delete this news item? This action cannot be undone.</Typography>
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