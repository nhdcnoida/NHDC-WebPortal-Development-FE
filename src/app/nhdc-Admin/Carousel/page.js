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

export default function CarouselManagement() {
  const [carouselItems, setCarouselItems] = useState([]);
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
    url: '',
    altText: '',
    EnCaption: '',
    HiCaption: '',
    displayOrder: 1,
    isActive: true
  });

  // Fetch carousel items with pagination and search/filter
  const fetchCarouselItems = async () => {
    try {
      setLoading(true);
      let url = `/Carouselnew?page=${page + 1}&limit=${rowsPerPage}`;
      
      if (searchTerm) {
        url += `&search=${searchTerm}`;
      }
      
      if (filter !== 'all') {
        if (filter === 'active') url += '&isActive=true';
        if (filter === 'inactive') url += '&isActive=false';
        if (filter === 'deleted') url += '&isDeleted=true';
      }

      const response = await api.get(url);
      setCarouselItems(response.data.data || response.data);
      setTotalItems(response.data.total || response.data.length);
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to fetch carousel items', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Debounce search
  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchCarouselItems();
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

  // Handle file upload for image
  const handleImageUpload = (filePath) => {
    setFormData(prev => ({ ...prev, url: filePath }));
  };

  // Open dialog for creating/editing
  const handleOpenDialog = (item = null) => {
    if (item) {
      setCurrentItem(item);
      setIsEditing(true);
      setFormData({
        url: item.url,
        altText: item.altText || '',
        EnCaption: item.EnCaption || '',
        HiCaption: item.HiCaption || '',
        displayOrder: item.displayOrder || 1,
        isActive: item.isActive
      });
    } else {
      setCurrentItem(null);
      setIsEditing(false);
      setFormData({
        url: '',
        altText: '',
        EnCaption: '',
        HiCaption: '',
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
        await api.put(`/Carouselnew/${currentItem._id}`, formData);
        setSnackbar({ open: true, message: 'Carousel item updated successfully', severity: 'success' });
      } else {
        await api.post('/Carouselnew', formData);
        setSnackbar({ open: true, message: 'Carousel item created successfully', severity: 'success' });
      }
      
      fetchCarouselItems();
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

  // Delete item
  const handleDelete = async () => {
    try {
      await api.delete(`/Carouselnew/${itemToDelete}`);
      setSnackbar({ open: true, message: 'Carousel item deleted successfully', severity: 'success' });
      fetchCarouselItems();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Delete failed', severity: 'error' });
    } finally {
      closeDeleteConfirm();
    }
  };

  // Toggle active status
  const toggleActiveStatus = async (id, currentStatus) => {
    try {
      await api.put(`/Carouselnew/${id}`, { isActive: !currentStatus });
      setSnackbar({ 
        open: true, 
        message: `Carousel item ${currentStatus ? 'deactivated' : 'activated'} successfully`, 
        severity: 'success' 
      });
      fetchCarouselItems();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Status update failed', severity: 'error' });
    }
  };

  // Restore deleted item
  const handleRestore = async (id) => {
    try {
      await api.put(`/Carouselnew/${id}/restore`);
      setSnackbar({ 
        open: true, 
        message: 'Carousel item restored successfully', 
        severity: 'success' 
      });
      fetchCarouselItems();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Restore failed', severity: 'error' });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Carousel Management
      </Typography>
      
      {/* Search and Filter */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Search Carousel Items"
          variant="outlined"
          size="small"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by caption or alt text..."
        />
        
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel>Filter</InputLabel>
          <Select
            value={filter}
            label="Filter"
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="all">All Items</MenuItem>
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
          New Item
        </Button>
      </Box>

      {/* Carousel Items Table */}
      <Paper sx={{ overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>English Caption</TableCell>
                <TableCell>Display Order</TableCell>
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
              ) : carouselItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No carousel items found
                  </TableCell>
                </TableRow>
              ) : (
                carouselItems.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell>
                      <Box 
                        component="img" 
                        src={`${process.env.NEXT_PUBLIC_STORAGE}${item.url}`}
                        alt={item.altText} 
                        sx={{ width: 100, height: 60, objectFit: 'cover' }} 
                      />
                    </TableCell>
                    <TableCell>{item.EnCaption}</TableCell>
                    <TableCell>{item.displayOrder}</TableCell>
                    <TableCell>
                      {item.isDeleted ? (
                        <Chip label="Deleted" color="error" size="small" />
                      ) : item.isActive ? (
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
                        
                        {!item.isDeleted && (
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
                        )}
                        
                        {item.isDeleted ? (
                          <>
                            <IconButton
                              size="small"
                              color="success"
                              onClick={() => handleRestore(item._id)}
                            >
                              <Restore fontSize="small" />
                            </IconButton>
                            <IconButton
                              size="small"
                              color="error"
                              onClick={() => openDeleteConfirm(item._id)}
                            >
                              <DeleteForever fontSize="small" />
                            </IconButton>
                          </>
                        ) : (
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => openDeleteConfirm(item._id)}
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
          {isEditing ? 'Edit Carousel Item' : 'Create New Carousel Item'}
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
            {/* Image Preview */}
            {formData.url && (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box 
                  component="img" 
                //   src={formData.url}
                   src={`${process.env.NEXT_PUBLIC_STORAGE}${formData.url}`} 
                  alt="Preview" 
                  sx={{ 
                    maxWidth: '100%', 
                    maxHeight: 300, 
                    mb: 2,
                    boxShadow: 3,
                    borderRadius: 1
                  }} 
                />
                <Button 
                  variant="outlined" 
                  color="error" 
                  size="small"
                  onClick={() => setFormData(prev => ({ ...prev, url: '' }))}
                >
                  Remove Image
                </Button>
              </Box>
            )}
            
            {/* Image Upload */}
            {!formData.url && (
              <FileUploadComponent 
                onUploadSuccess={handleImageUpload}
                defaultFolder="/public/Carousel"
                accept="image/*"
                label="Upload Carousel Image"
              />
            )}
            
            {/* Alt Text */}
            <TextField
              label="Alt Text"
              name="altText"
              value={formData.altText}
              onChange={handleChange}
              fullWidth
              helperText="Text to display if image fails to load"
            />
            
            {/* English Caption */}
            <TextField
              label="English Caption"
              name="EnCaption"
              value={formData.EnCaption}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
            />
            
            {/* Hindi Caption */}
            <TextField
              label="Hindi Caption"
              name="HiCaption"
              value={formData.HiCaption}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
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
                required
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
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" disabled={!formData.url}>
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
          <Typography>Are you sure you want to delete this carousel item? This action cannot be undone.</Typography>
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