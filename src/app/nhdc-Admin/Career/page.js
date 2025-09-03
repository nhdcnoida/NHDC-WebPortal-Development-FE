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
  FormControlLabel,
  Checkbox
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
  
} from '@mui/icons-material';
import FileUploadComponent from '@/lib/FileUpload';
import { api } from '@/lib/api';

export default function TenderManagement() {
  const [tenders, setTenders] = useState([]);
  const [totalTenders, setTotalTenders] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentTender, setCurrentTender] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Form state
  const [formData, setFormData] = useState({
    HiName: '',
    EnName: '',
    HiDescription: '',
    EnDescription: '',
    uploadDate:'',
    closingDate: '',
    mainFileLink: '',
    subFileLinks: [],
    category: 'general',
    referenceNumber: '',
    displayOrder: 1,
    isActive: true,
    isNew: false,
    isArchive: false
  });

  // Fetch tenders with pagination and search/filter
const fetchTenders = async () => {
  try {
    setLoading(true);
    let url = `/Career?page=${page + 1}&limit=${rowsPerPage}`;
    
    // Add search term if provided
    if (searchTerm) {
      url += `&search=${searchTerm}`;
    }
    
    // Add filter if not 'all'
    if (filter !== 'all') {
      if (filter === 'active') url += '&isActive=true';
      if (filter === 'inactive') url += '&isActive=false';
      if (filter === 'deleted') url += '&isDeleted=true';
    }

    // ✅ Add sorting by uploadDate (descending by default)
    url += '&sort=-uploadDate';

    const response = await api.get(url);
    setTenders(response.data.data || response.data);
    setTotalTenders(response.data.total || response.data.length);
  } catch (error) {
    setSnackbar({ open: true, message: 'Failed to fetch tenders', severity: 'error' });
  } finally {
    setLoading(false);
  }
};



 // Handle form input changes
  const handleisNewChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };


  // Debounce search to avoid too many API calls
  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchTenders();
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
  const  handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle file upload for main file
  const handleMainFileUpload = (filePath) => {
    setFormData(prev => ({ ...prev, mainFileLink: filePath }));
  };

  // Handle file upload for sub files
  const handleSubFileUpload = (filePath) => {
    setFormData(prev => ({
      ...prev,
      subFileLinks: [...prev.subFileLinks, { HiName: '', EnName: '', link: filePath }]
    }));
  };

  // Open dialog for creating/editing
  const handleOpenDialog = (tender = null) => {
    if (tender) {
      setCurrentTender(tender);
      setIsEditing(true);
      setFormData({
        HiName: tender.HiName,
        EnName: tender.EnName,
        HiDescription: tender.HiDescription,
        EnDescription: tender.EnDescription,
        uploadDate: tender.uploadDate ? new Date(tender.uploadDate).toISOString().split('T')[0] : '',
        closingDate: tender.closingDate ? new Date(tender.closingDate).toISOString().split('T')[0] : '',
        mainFileLink: tender.mainFileLink,
        subFileLinks: tender.subFileLinks || [],
        category: tender.category || 'general',
        referenceNumber: tender.referenceNumber || '',
        displayOrder: tender.displayOrder || 1,
        isActive: tender.isActive,
        isNew: tender.isNew || false,
        isArchive: tender.isArchive || false
      });
    } else {
      setCurrentTender(null);
      setIsEditing(false);
      setFormData({
        HiName: '',
        EnName: '',
        HiDescription: '',
        EnDescription: '',
        uploadDate: '',
        closingDate: '',
        mainFileLink: '',
        subFileLinks: [],
        category: 'general',
        referenceNumber: '',
        displayOrder: 1,
        isActive: true,
        isNew: false,
        isArchive: false
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
        await api.put(`/Career/${currentTender._id}`, payload);
        setSnackbar({ open: true, message: 'Career updated successfully', severity: 'success' });
      } else {
        await api.post('/Career', payload);
        setSnackbar({ open: true, message: 'Career created successfully', severity: 'success' });
      }
      
      fetchTenders();
      handleCloseDialog();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Operation failed', severity: 'error' });
    }
  };

  // Delete tender
  const handleDelete = async (id) => {
    try {
      await api.delete(`/Career/${id}`);
      setSnackbar({ open: true, message: 'Career deleted successfully', severity: 'success' });
      fetchTenders();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Delete failed', severity: 'error' });
    }
  };

  // Toggle active status
  const toggleActiveStatus = async (id, currentStatus) => {
    try {
      await api.put(`/Career/${id}`, { isActive: !currentStatus });
      setSnackbar({ 
        open: true, 
        message: `Career ${currentStatus ? 'deactivated' : 'activated'} successfully`, 
        severity: 'success' 
      });
      fetchTenders();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Status update failed', severity: 'error' });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Career Management
      </Typography>
      
      {/* Search and Filter */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Search Tenders"
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
            <MenuItem value="all">All Tenders</MenuItem>
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
          New Career
        </Button>
      </Box>

      {/* Tenders Table */}
      <Paper sx={{ overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reference No.</TableCell>
                <TableCell>Name (EN)</TableCell>
                <TableCell>Upload Date</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Closing Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : tenders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No tenders found
                  </TableCell>
                </TableRow>
              ) : (
                tenders.map((tender) => (
                  <TableRow key={tender._id}>
                    <TableCell>{tender.referenceNumber || '-'}</TableCell>
                    <TableCell>{tender.EnName}</TableCell>
                    <TableCell>{new Date(tender.uploadDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Chip 
                        label={tender.category} 
                        size="small" 
                        color={
                          tender.category === 'technical' ? 'primary' : 
                          tender.category === 'financial' ? 'success' : 
                          'default'
                        }
                      />
                    </TableCell>
                    <TableCell>
                      {new Date(tender.closingDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {tender.isDeleted ? (
                        <Chip label="Deleted" color="error" size="small" />
                      ) : tender.isActive ? (
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
                          onClick={() => handleOpenDialog(tender)}
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        
                        {!tender.isDeleted && (
                          <IconButton
                            size="small"
                            color={tender.isActive ? 'secondary' : 'default'}
                            onClick={() => toggleActiveStatus(tender._id, tender.isActive)}
                          >
                            {tender.isActive ? (
                              <Unpublished fontSize="small" />
                            ) : (
                              <Publish fontSize="small" />
                            )}
                          </IconButton>
                        )}
                        
                        {tender.isDeleted ? (
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => handleDelete(tender._id)}
                          >
                            <DeleteForever fontSize="small" />
                          </IconButton>
                        ) : (
                          <IconButton
                            size="small"
                            color="error"
                            onClick={() => handleDelete(tender._id)}
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
          count={totalTenders}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Create/Edit Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {isEditing ? 'Edit Career' : 'Create New Career'}
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
              
              {/* Category */}
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value="general">General</MenuItem>
                  <MenuItem value="technical">Technical</MenuItem>
                  <MenuItem value="financial">Financial</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
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

                             <FormControlLabel
                              control={
                                <Checkbox
                                  checked={formData.isArchive}
                                  onChange={handleisNewChange}
                                  name="isArchive"
                                />
                              }
                              label="isArchive"
                            />
            </Box>
            
            {/* Reference Number */}
            <TextField
              label="Reference Number"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleChange}
              fullWidth
            />
            
            {/* Main File Upload */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Main Document
              </Typography>
              {formData.mainFileLink ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2">
                    {formData.mainFileLink}
                  </Typography>
                  <IconButton size="small" onClick={() => setFormData(prev => ({ ...prev, mainFileLink: '' }))}>
                    <Delete fontSize="small" />
                  </IconButton>
                </Box>
              ) : (
                <FileUploadComponent 
                  onUploadSuccess={handleMainFileUpload}
                  defaultFolder="/public/Career"
                />
              )}
            </Box>
            
            {/* Sub Files Upload */}
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Additional Documents
              </Typography>
              
              {formData.subFileLinks.map((file, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <TextField
                    label="English Name"
                    value={file.EnName}
                    onChange={(e) => {
                      const newFiles = [...formData.subFileLinks];
                      newFiles[index].EnName = e.target.value;
                      setFormData(prev => ({ ...prev, subFileLinks: newFiles }));
                    }}
                    size="small"
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
                  />
                  <Typography variant="body2" sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {file.link}
                  </Typography>
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
                defaultFolder="/public/Career/Additional"
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