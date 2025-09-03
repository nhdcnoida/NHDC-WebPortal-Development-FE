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
  Snackbar, 
  Alert,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Stack,
  TablePagination,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { 
  Add, 
  Edit, 
  Delete, 
  Close,
  Publish,
  Unpublished,
  DeleteForever,
  Restore
} from '@mui/icons-material';
import FileUploadComponent from '@/lib/FileUpload';
import { api } from '@/lib/api';

export default function TestimonialManagement() {
  const [testimonials, setTestimonials] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name_en: '',
    name_hi: '',
    role_en: '',
    role_hi: '',
    location_en: '',
    location_hi: '',
    content_en: '',
    content_hi: '',
    avatar: '',
    isFeatured: false,
    displayOrder: 1,
    isActive: true
  });

  // Fetch testimonials with pagination and search/filter
  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      let url = `Testimonial?page=${page + 1}&limit=${rowsPerPage}`;
      
      if (searchTerm) {
        url += `&search=${searchTerm}`;
      }
      
      if (filter !== 'all') {
        if (filter === 'active') url += '&isActive=true';
        if (filter === 'inactive') url += '&isActive=false';
        if (filter === 'featured') url += '&isFeatured=true';
      }

      const response = await api.get(url);
      setTestimonials(response.data.data || response.data);
      setTotalItems(response.data.total || response.data.length);
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to fetch testimonials', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Debounce search
  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchTestimonials();
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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle file upload for avatar
  const handleAvatarUpload = (filePath) => {
    setFormData(prev => ({ ...prev, avatar: filePath }));
  };

  // Open dialog for creating/editing
  const handleOpenDialog = (item = null) => {
    if (item) {
      setCurrentItem(item);
      setIsEditing(true);
      setFormData({
        name_en: item.name_en,
        name_hi: item.name_hi,
        role_en: item.role_en,
        role_hi: item.role_hi,
        location_en: item.location_en,
        location_hi: item.location_hi,
        content_en: item.content_en,
        content_hi: item.content_hi,
        avatar: item.avatar,
        isFeatured: item.isFeatured,
        displayOrder: item.displayOrder || 1,
        isActive: item.isActive
      });
    } else {
      setCurrentItem(null);
      setIsEditing(false);
      setFormData({
        name_en: '',
        name_hi: '',
        role_en: '',
        role_hi: '',
        location_en: '',
        location_hi: '',
        content_en: '',
        content_hi: '',
        avatar: '',
        isFeatured: false,
        displayOrder: 1,
        isActive: true
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
      if (isEditing) {
        await api.put(`Testimonial/${currentItem._id}`, formData);
        setSnackbar({ open: true, message: 'Testimonial updated successfully', severity: 'success' });
      } else {
        await api.post('Testimonial', formData);
        setSnackbar({ open: true, message: 'Testimonial created successfully', severity: 'success' });
      }
      
      fetchTestimonials();
      handleCloseDialog();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Operation failed', severity: 'error' });
    }
  };

  // Open delete confirmation dialog
  const openDeleteConfirm = (id) => {
    setItemToDelete(id);
    setDeleteConfirmOpen(true);
  };

  // Close delete confirmation dialog
  const closeDeleteConfirm = () => {
    setDeleteConfirmOpen(false);
    setItemToDelete(null);
  };

  // Delete testimonial
  const handleDelete = async () => {
    try {
      await api.delete(`Testimonial/${itemToDelete}`);
      setSnackbar({ open: true, message: 'Testimonial deleted successfully', severity: 'success' });
      fetchTestimonials();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Delete failed', severity: 'error' });
    } finally {
      closeDeleteConfirm();
    }
  };

  // Toggle active status
  const toggleActiveStatus = async (id, currentStatus) => {
    try {
      await api.put(`Testimonial/${id}`, { isActive: !currentStatus });
      setSnackbar({ 
        open: true, 
        message: `Testimonial ${currentStatus ? 'deactivated' : 'activated'} successfully`, 
        severity: 'success' 
      });
      fetchTestimonials();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Status update failed', severity: 'error' });
    }
  };

  // Toggle featured status
  const toggleFeaturedStatus = async (id, currentStatus) => {
    try {
      await api.put(`Testimonial/${id}`, { isFeatured: !currentStatus });
      setSnackbar({ 
        open: true, 
        message: `Testimonial ${currentStatus ? 'removed from featured' : 'marked as featured'}`, 
        severity: 'success' 
      });
      fetchTestimonials();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Status update failed', severity: 'error' });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Testimonial Management
      </Typography>
      
      {/* Search and Filter */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Search Testimonials"
          variant="outlined"
          size="small"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name or content..."
        />
        
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel>Filter</InputLabel>
          <Select
            value={filter}
            label="Filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="all">All Testimonials</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
            <MenuItem value="featured">Featured</MenuItem>
          </Select>
        </FormControl>
        
        <Button 
          variant="contained" 
          startIcon={<Add />}
          onClick={() => handleOpenDialog()}
        >
          New Testimonial
        </Button>
      </Box>

      {/* Testimonials Table */}
      <Paper sx={{ overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Name (EN)</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Featured</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : testimonials.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No testimonials found
                  </TableCell>
                </TableRow>
              ) : (
                testimonials.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      <Box 
                        component="img" 
                        src={`${process.env.NEXT_PUBLIC_STORAGE}${item.avatar}`}
                        alt={item.name_en} 
                        sx={{ 
                          width: 50, 
                          height: 50, 
                          borderRadius: '50%',
                          objectFit: 'cover' 
                        }} 
                      />
                    </TableCell>
                    <TableCell>{item.name_en}</TableCell>
                    <TableCell>{item.role_en}</TableCell>
                    <TableCell>
                      <Checkbox
                        checked={item.isFeatured}
                        onChange={() => toggleFeaturedStatus(item._id, item.isFeatured)}
                        color="primary"
                      />
                    </TableCell>
                    <TableCell>
                      {item.isActive ? (
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
                          onClick={() => handleOpenDialog(item)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        
                        <IconButton
                          size="small"
                          color={item.isActive ? 'secondary' : 'default'}
                          onClick={() => toggleActiveStatus(item._id, item.isActive)}
                        >
                          {item.isActive ? (
                            <Unpublished fontSize="small" />
                          ) : (
                            <Publish fontSize="small" />
                          )}
                        </IconButton>
                        
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => openDeleteConfirm(item._id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
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
          count={totalItems}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Create/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {isEditing ? 'Edit Testimonial' : 'Create New Testimonial'}
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
            {/* Avatar Preview */}
            {formData.avatar && (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box 
                  component="img" 
                  src={`${process.env.NEXT_PUBLIC_STORAGE}${formData.avatar}`}
                  alt="Preview" 
                  sx={{ 
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: 2,
                    boxShadow: 3
                  }} 
                />
                <Button 
                  variant="outlined" 
                  color="error" 
                  size="small"
                  onClick={() => setFormData(prev => ({ ...prev, avatar: '' }))}
                >
                  Remove Avatar
                </Button>
              </Box>
            )}
            
            {/* Avatar Upload */}
            {!formData.avatar && (
              <FileUploadComponent 
                onUploadSuccess={handleAvatarUpload}
                defaultFolder="/public/Testimonial"
                accept="image/*"
                label="Upload Avatar Image"
              />
            )}
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              {/* English Name */}
              <TextField
                label="Name (English)"
                name="name_en"
                value={formData.name_en}
                onChange={handleChange}
                fullWidth
                required
              />
              
              {/* Hindi Name */}
              <TextField
                label="Name (Hindi)"
                name="name_hi"
                value={formData.name_hi}
                onChange={handleChange}
                fullWidth
                required
              />
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              {/* English Role */}
              <TextField
                label="Role (English)"
                name="role_en"
                value={formData.role_en}
                onChange={handleChange}
                fullWidth
              />
              
              {/* Hindi Role */}
              <TextField
                label="Role (Hindi)"
                name="role_hi"
                value={formData.role_hi}
                onChange={handleChange}
                fullWidth
              />
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              {/* English Location */}
              <TextField
                label="Location (English)"
                name="location_en"
                value={formData.location_en}
                onChange={handleChange}
                fullWidth
              />
              
              {/* Hindi Location */}
              <TextField
                label="Location (Hindi)"
                name="location_hi"
                value={formData.location_hi}
                onChange={handleChange}
                fullWidth
              />
            </Box>
            
            {/* English Content */}
            <TextField
              label="Testimonial (English)"
              name="content_en"
              value={formData.content_en}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />
            
            {/* Hindi Content */}
            <TextField
              label="Testimonial (Hindi)"
              name="content_hi"
              value={formData.content_hi}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              required
            />
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              {/* Display Order */}
              <TextField
                label="Display Order"
                name="displayOrder"
                type="number"
                value={formData.displayOrder}
                onChange={handleChange}
                fullWidth
                inputProps={{ min: 1 }}
              />
              
              {/* Status */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isActive}
                    onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                    name="isActive"
                    color="primary"
                  />
                }
                label="Active"
              />
              
              {/* Featured */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData(prev => ({ ...prev, isFeatured: e.target.checked }))}
                    name="isFeatured"
                    color="secondary"
                  />
                }
                label="Featured"
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" disabled={!formData.avatar}>
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
          <Typography>Are you sure you want to delete this testimonial? This action cannot be undone.</Typography>
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