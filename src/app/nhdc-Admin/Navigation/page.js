'use client';
import { useState, useEffect, useCallback } from 'react';
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
  Checkbox,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress
} from '@mui/material';
import { 
  Add, 
  Edit, 
  Delete, 
  Close,
  ExpandMore,
  Restore,
  Link as LinkIcon,
  ArrowUpward,
  ArrowDownward
} from '@mui/icons-material';
// Mock API for demonstration. Replace with your actual API import.
import { api } from '@/lib/api';




export default function NavigationManagement() {
  const [navigations, setNavigations] = useState([]);
  const [totalNavigations, setTotalNavigations] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [navigationToDelete, setNavigationToDelete] = useState(null);
  const [expandedLevels, setExpandedLevels] = useState({});

  const initialFormData = {
    EnName: '',
    HiName: '',
    displayPosition: 1,
    isActive: true,
    isLink: false,
    isCustomLink: false,
    Link: '',
    SubNav: []
  };

  const [formData, setFormData] = useState(initialFormData);
  
  const fetchNavigations = useCallback(async () => {
    try {
      setLoading(true);
      let url = `navigation?page=${page + 1}&limit=${rowsPerPage}`;
      if (searchTerm) url += `&search=${searchTerm}`;
      if (filter !== 'all') {
        if (filter === 'active') url += '&isActive=true&isDeleted=false';
        else if (filter === 'inactive') url += '&isActive=false&isDeleted=false';
        else if (filter === 'deleted') url += '&isDeleted=true';
      }

      const response = await api.get(url);
      setNavigations(response.data || []);
      setTotalNavigations(response.data.pagination?.total || response.data.data?.length || 0);
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to fetch navigations', severity: 'error' });
    } finally {
      setLoading(false);
    }
  }, [page, rowsPerPage, searchTerm, filter]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchNavigations();
    }, 500);
    return () => clearTimeout(timerId);
  }, [fetchNavigations]);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubLevelChange = (path, e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    
    setFormData(prev => {
        const newFormData = JSON.parse(JSON.stringify(prev)); // Deep copy
        let current = newFormData;
        for (let i = 0; i < path.length - 1; i++) {
            current = current[path[i]];
        }
        current[path[path.length - 1]][name] = val;
        return newFormData;
    });
  };

  const handleOpenDialog = (navItem = null) => {
    if (navItem) {
      setIsEditing(true);
      setFormData({
        _id: navItem._id,
        EnName: navItem.EnName || '',
        HiName: navItem.HiName || '',
        displayPosition: navItem.displayPosition || 1,
        isActive: navItem.isActive !== undefined ? navItem.isActive : true,
        isLink: navItem.isLink || false,
        isCustomLink: navItem.isCustomLink || false,
        Link: navItem.Link || '',
        SubNav: navItem.SubNav || []
      });
    } else {
      setIsEditing(false);
      setFormData(initialFormData);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setExpandedLevels({});
  };

  const addSubLevel = (path, level) => {
    const newLevelItem = {
      EnName: '', HiName: '', displayPosition: 1, isActive: true, isLink: false, isCustomLink: false, Link: ''
    };
    if (level === 'sub') newLevelItem.SubChildNav = [];
    if (level === 'subchild') newLevelItem.FourthLevelNav = [];

    setFormData(prev => {
        const newFormData = JSON.parse(JSON.stringify(prev));
        let current = newFormData;
        for (const key of path) {
            current = current[key];
        }
        
        const nextPosition = current.length > 0 ? Math.max(...current.map(item => item.displayPosition)) + 1 : 1;
        newLevelItem.displayPosition = nextPosition;

        current.push(newLevelItem);
        return newFormData;
    });
  };
  
  const removeSubLevel = (path) => {
    setFormData(prev => {
        const newFormData = JSON.parse(JSON.stringify(prev));
        let current = newFormData;
        let parent = null;
        let lastKey = null;
        for (const key of path) {
            parent = current;
            lastKey = key;
            current = current[key];
        }
        parent.splice(lastKey, 1);
        return newFormData;
    });
  };

  const toggleLevelExpansion = (key) => {
    setExpandedLevels(prev => ({ ...prev, [key]: !prev[key] }));
  };
  
  const updateDisplayOrder = (path, direction) => {
    setFormData(prev => {
        const newFormData = JSON.parse(JSON.stringify(prev));
        let list = newFormData;
        for (let i = 0; i < path.length - 1; i++) {
            list = list[path[i]];
        }
        const index = path[path.length - 1];
        
        if (direction === 'up' && index > 0) {
            [list[index], list[index - 1]] = [list[index - 1], list[index]];
        } else if (direction === 'down' && index < list.length - 1) {
            [list[index], list[index + 1]] = [list[index + 1], list[index]];
        }

        // Re-assign display positions based on new order
        list.forEach((item, idx) => {
            item.displayPosition = idx + 1;
        });

        return newFormData;
    });
  };

  const handleSubmit = async () => {
    try {
      const validateLevels = (items, levelName) => {
        for (const item of items) {
          if (!item.EnName || !item.HiName) throw new Error(`Names are required for all ${levelName} items.`);
          if (item.isLink && !item.Link) throw new Error(`Link is required for linked ${levelName} items.`);
          if (item.SubChildNav) validateLevels(item.SubChildNav, 'sub-child');
          if (item.FourthLevelNav) validateLevels(item.FourthLevelNav, 'fourth-level');
        }
      };
      validateLevels(formData.SubNav, 'sub-nav');

      if (isEditing) {
        await api.put(`navigation/${formData._id}`, formData);
        setSnackbar({ open: true, message: 'Navigation updated successfully', severity: 'success' });
      } else {
        await api.post('navigation', formData);
        setSnackbar({ open: true, message: 'Navigation created successfully', severity: 'success' });
      }
      fetchNavigations();
      handleCloseDialog();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Operation failed', severity: 'error' });
    }
  };

  const openDeleteConfirm = (id) => {
    setNavigationToDelete(id);
    setDeleteConfirmOpen(true);
  };

  const closeDeleteConfirm = () => {
    setDeleteConfirmOpen(false);
    setNavigationToDelete(null);
  };

  const handleDelete = async () => {
    try {
      await api.delete(`navigation/${navigationToDelete}/permanent`); // Assuming a permanent delete endpoint
      setSnackbar({ open: true, message: 'Navigation permanently deleted', severity: 'success' });
      fetchNavigations();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Delete failed', severity: 'error' });
    } finally {
      closeDeleteConfirm();
    }
  };

  const toggleNavigationStatus = async (id, isDeleted) => {
    try {
      if (isDeleted) {
        await api.put(`navigation/${id}/restore`, {});
        setSnackbar({ open: true, message: 'Navigation restored', severity: 'success' });
      } else {
        await api.delete(`navigation/${id}`);
        setSnackbar({ open: true, message: 'Navigation moved to trash', severity: 'success' });
      }
      fetchNavigations();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || 'Status update failed', severity: 'error' });
    }
  };

  const renderSubLevels = (items, path, levelName) => {
    return items.map((item, index) => {
      const currentPath = [...path, index];
      const key = currentPath.join('-');
      const nextLevel = levelName === 'sub' ? 'subchild' : 'fourth';
      const childNavKey = levelName === 'sub' ? 'SubChildNav' : 'FourthLevelNav';

      return (
        <Accordion key={key} expanded={!!expandedLevels[key]} onChange={() => toggleLevelExpansion(key)}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Stack direction="row" spacing={2} alignItems="center" width="100%">
              <Typography sx={{ flex: 1 }}>{item.EnName || `New ${levelName} Item`}</Typography>
              <Chip label={`Order: ${item.displayPosition}`} size="small" />
              <Chip label={item.isActive ? 'Active' : 'Inactive'} size="small" color={item.isActive ? 'success' : 'default'} />
              {item.isLink && <Chip icon={<LinkIcon />} label="Link" size="small" />}
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ p: 2, border: '1px solid #eee', borderRadius: 1 }}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                  <TextField label="English Name" name="EnName" value={item.EnName} onChange={(e) => handleSubLevelChange(currentPath, e)} fullWidth required />
                  <TextField label="Hindi Name" name="HiName" value={item.HiName} onChange={(e) => handleSubLevelChange(currentPath, e)} fullWidth required />
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <TextField label="Display Position" name="displayPosition" type="number" value={item.displayPosition} onChange={(e) => handleSubLevelChange(currentPath, e)} required />
                  <IconButton size="small" onClick={() => updateDisplayOrder(path, 'up')} disabled={index === 0}><ArrowUpward fontSize="small" /></IconButton>
                  <IconButton size="small" onClick={() => updateDisplayOrder(path, 'down')} disabled={index === items.length - 1}><ArrowDownward fontSize="small" /></IconButton>
                </Stack>
                <Stack spacing={1}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <FormControlLabel control={<Checkbox checked={item.isActive} onChange={(e) => handleSubLevelChange(currentPath, e)} name="isActive" />} label="Active" />
                        <FormControlLabel control={<Checkbox checked={item.isLink} onChange={(e) => handleSubLevelChange(currentPath, e)} name="isLink" />} label="Is Link" />
                        {item.isLink && (
                            <FormControlLabel 
                                control={<Checkbox checked={!!item.isCustomLink} onChange={(e) => handleSubLevelChange(currentPath, e)} name="isCustomLink" />} 
                                label="Is Custom Link" 
                            />
                        )}
                    </Stack>
                    {item.isLink && <TextField label="Link" name="Link" value={item.Link} onChange={(e) => handleSubLevelChange(currentPath, e)} fullWidth required />}
                </Stack>

                {item[childNavKey] && (
                  <Box>
                    <Typography variant="subtitle2" gutterBottom>{nextLevel === 'subchild' ? 'Sub-Child Nav (L3)' : 'Fourth Level Nav (L4)'}</Typography>
                    {item[childNavKey].length > 0 ? renderSubLevels(item[childNavKey], [...currentPath, childNavKey], nextLevel) : <Typography variant="body2" color="text.secondary">No items</Typography>}
                    <Button variant="outlined" startIcon={<Add />} onClick={() => addSubLevel([...currentPath, childNavKey], nextLevel)} sx={{ mt: 1 }}>Add {nextLevel}</Button>
                  </Box>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="outlined" color="error" startIcon={<Delete />} onClick={() => removeSubLevel(currentPath)}>Remove</Button>
                </Box>
              </Stack>
            </Box>
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Navigation Management</Typography>
      
      <Stack direction="row" spacing={2} mb={3}>
        <TextField label="Search Navigation" variant="outlined" size="small" fullWidth value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel>Filter</InputLabel>
          <Select value={filter} label="Filter" onChange={(e) => setFilter(e.target.value)}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
            <MenuItem value="deleted">Deleted</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" startIcon={<Add />} onClick={() => handleOpenDialog()}>New</Button>
      </Stack>

      <Paper sx={{ overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name (EN)</TableCell>
                <TableCell>Name (HI)</TableCell>
                <TableCell>Sub-Levels</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={6} align="center"><CircularProgress /></TableCell></TableRow>
              ) : navigations.length === 0 ? (
                <TableRow><TableCell colSpan={6} align="center">No navigation items found</TableCell></TableRow>
              ) : (
                navigations.map((nav) => (
                  <TableRow key={nav._id}>
                    <TableCell>{nav.EnName}</TableCell>
                    <TableCell>{nav.HiName}</TableCell>
                    <TableCell><Chip label={`${nav.SubNav?.length || 0} items`} size="small" /></TableCell>
                    <TableCell>{nav.displayPosition}</TableCell>
                    <TableCell>
                      {nav.isDeleted ? <Chip label="Deleted" color="error" size="small" />
                        : nav.isActive ? <Chip label="Active" color="success" size="small" />
                        : <Chip label="Inactive" size="small" />}
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <IconButton size="small" color="info" onClick={() => handleOpenDialog(nav)}><Edit fontSize="small" /></IconButton>
                        {nav.isDeleted ? (
                          <>
                            <IconButton size="small" color="success" onClick={() => toggleNavigationStatus(nav._id, true)}><Restore fontSize="small" /></IconButton>
                            <IconButton size="small" color="error" onClick={() => openDeleteConfirm(nav._id)}><Delete fontSize="small" /></IconButton>
                          </>
                        ) : (
                          <IconButton size="small" color="warning" onClick={() => toggleNavigationStatus(nav._id, false)}><Delete fontSize="small" /></IconButton>
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
          count={totalNavigations}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>
          {isEditing ? 'Edit Navigation' : 'Create New Navigation'}
          <IconButton aria-label="close" onClick={handleCloseDialog} sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Stack spacing={3} pt={1}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>Main Navigation (Level 1)</Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <TextField label="English Name" name="EnName" value={formData.EnName} onChange={handleChange} fullWidth required />
                    <TextField label="Hindi Name" name="HiName" value={formData.HiName} onChange={handleChange} fullWidth required />
                </Stack>
                <TextField label="Display Position" name="displayPosition" type="number" value={formData.displayPosition} onChange={handleChange} required />
                <Stack spacing={1}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <FormControlLabel control={<Checkbox checked={formData.isActive} onChange={handleChange} name="isActive" />} label="Active" />
                        <FormControlLabel control={<Checkbox checked={formData.isLink} onChange={handleChange} name="isLink" />} label="Is Link" />
                        {formData.isLink && (
                           <FormControlLabel 
                                control={<Checkbox checked={!!formData.isCustomLink} onChange={handleChange} name="isCustomLink" />} 
                                label="Is Custom Link" 
                            />
                        )}
                    </Stack>
                    {formData.isLink && <TextField label="Link" name="Link" value={formData.Link} onChange={handleChange} fullWidth required />}
                </Stack>
              </Stack>
            </Paper>
            
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>Sub Navigation (Level 2)</Typography>
              {formData.SubNav.length > 0 ? (
                renderSubLevels(formData.SubNav, ['SubNav'], 'sub')
              ) : (
                <Typography variant="body2" color="text.secondary" textAlign="center" py={3}>No sub-navigation items.</Typography>
              )}
              <Button variant="outlined" startIcon={<Add />} onClick={() => addSubLevel(['SubNav'], 'sub')} sx={{ mt: 1 }}>Add Sub Navigation</Button>
            </Paper>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" disabled={!formData.EnName || !formData.HiName}>
            {isEditing ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={deleteConfirmOpen} onClose={closeDeleteConfirm} maxWidth="xs">
        <DialogTitle>Confirm Permanent Delete</DialogTitle>
        <DialogContent><Typography>Are you sure? This action cannot be undone.</Typography></DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteConfirm}>Cancel</Button>
          <Button onClick={handleDelete} color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
