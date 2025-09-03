'use client';
import { useState, useEffect } from 'react';
import {
  Container, Box, Typography, Button, Paper, TableContainer, Table, TableHead, TableRow, TableCell,
  TableBody, Chip, IconButton, Tooltip, Stack, CircularProgress, Alert, Dialog, DialogActions,
  DialogContent, DialogTitle, TextField, Grid, Divider, InputAdornment, Pagination, Select,
  MenuItem, FormControl, InputLabel, Snackbar
} from '@mui/material';
import { 
  Add, Edit, Delete, Restore, Visibility, Search, Clear, CloudUpload, Folder
} from '@mui/icons-material';
import FileUploadComponent from '@/lib/FileUpload';
import { api } from '@/lib/api';
import Cookies from 'js-cookie';
import Image from 'next/image';

export default function EventAdminPanel() {
  // State management
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 1
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    includeDeleted: false,
    sort: '-createdAt'
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('create');
  const [formData, setFormData] = useState({
    HiName: '',
    EnName: '',
    Slug: '',
    ImagesLink: [],
    HtmlData: '',
    HiHtmlData: '',
    EnTables: [],
    HiTables: []
  });

  // Generate unique keys for React components
  const generateKey = (prefix, id, index) => {
    return id ? `${prefix}-${id.toString()}` : `${prefix}-${index}`;
  };

  // Fetch events with current filters
  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const query = new URLSearchParams({
        page: pagination.page,
        limit: pagination.limit,
        ...filters,
        ...(searchTerm && { search: searchTerm })
      }).toString();
      
      const response = await api.get(`Eventtable?${query}`);
      setEvents(response.data || []);
      setPagination(response.pagination || {
        page: 1,
        limit: 10,
        total: response.data?.length || 0,
        pages: 1
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [pagination.page, pagination.limit, filters, searchTerm]);

  // Form handling functions
  const handleCreateClick = () => {
    setFormData({
      HiName: '',
      EnName: '',
      Slug: '',
      ImagesLink: [],
      HtmlData: '',
      HiHtmlData: '',
      EnTables: [],
      HiTables: []
    });
    setFormMode('create');
    setFormOpen(true);
  };

  const handleEditClick = (event) => {
    setFormData({
      HiName: event.HiName || '',
      EnName: event.EnName || '',
      Slug: event.Slug || '',
      ImagesLink: event.ImagesLink?.map(img => ({ 
        ...img,
        _id: img._id || img.id || generateKey('img', Math.random(), 0)
      })) || [],
      HtmlData: event.HtmlData || '',
      HiHtmlData: event.HiHtmlData || '',
      EnTables: event.EnTables?.map(table => ({ 
        ...table,
        _id: table._id || table.id || generateKey('en-table', Math.random(), 0),
        TableDate: table.TableDate ? new Date(table.TableDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        rows: table.rows?.map(row => ({ 
          ...row,
          _id: row._id || row.id || generateKey('en-row', Math.random(), 0)
        })) || []
      })) || [],
      HiTables: event.HiTables?.map(table => ({ 
        ...table,
        _id: table._id || table.id || generateKey('hi-table', Math.random(), 0),
        TableDate: table.TableDate ? new Date(table.TableDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        rows: table.rows?.map(row => ({ 
          ...row,
          _id: row._id || row.id || generateKey('hi-row', Math.random(), 0)
        })) || []
      })) || []
    });
    setFormMode('edit');
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      
      // Prepare data without the generated _id fields and format dates
      const dataToSend = {
        ...formData,
        EnTables: formData.EnTables.map(table => ({
          ...table,
          _id: undefined,
          TableDate: table.TableDate ? new Date(table.TableDate).toISOString() : new Date().toISOString(),
          rows: table.rows.map(row => ({
            ...row,
            _id: undefined
          }))
        })),
        HiTables: formData.HiTables.map(table => ({
          ...table,
          _id: undefined,
          TableDate: table.TableDate ? new Date(table.TableDate).toISOString() : new Date().toISOString(),
          rows: table.rows.map(row => ({
            ...row,
            _id: undefined
          }))
        }))
      };

      if (formMode === 'create') {
        await api.post('Eventtable', dataToSend);
        setSuccess('Event created successfully!');
      } else {
        await api.put(`Eventtable/${selectedEvent._id}`, dataToSend);
        setSuccess('Event updated successfully!');
      }
      
      setFormOpen(false);
      fetchEvents();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchEvents();
  };

  const handlePageChange = (event, newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
  };

  const handleLimitChange = (e) => {
    setPagination(prev => ({ ...prev, limit: e.target.value, page: 1 }));
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await api.delete(`Eventtable/${selectedEvent._id}`);
      setSuccess('Event deleted successfully!');
      setDeleteDialogOpen(false);
      fetchEvents();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async (id) => {
    try {
      setLoading(true);
      await api.put(`Eventtable/${id}/restore`);
      setSuccess('Event restored successfully!');
      fetchEvents();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUploadSuccess = (uploadResponse) => {
    // Create the image data object with both Name and Link
    const imageData = {
      Name: uploadResponse, // Use the original file name
      Link: uploadResponse // The path returned from the upload
    };

    setFormData(prev => ({
      ...prev,
      ImagesLink: [...(prev.ImagesLink || []), imageData]
    }));
  };

 // Table operations
const addTable = (language) => {
  const tableKey = `${language}Tables`;
  setFormData(prev => ({
    ...prev,
    [tableKey]: [
      { 
        _id: generateKey(`${language}-table`, Math.random(), prev[tableKey].length),
        title: '', 
        TableDate: new Date().toISOString().split('T')[0], // Default to current date
        headers: [], 
        rows: [] 
      },
      ...prev[tableKey] // ⬅️ existing tables pushed after new one
    ]
  }));
};


  const addRow = (language, tableIndex) => {
    const tableKey = `${language}Tables`;
    const updatedTables = [...formData[tableKey]];
    const headers = updatedTables[tableIndex].headers;
    updatedTables[tableIndex].rows.push({
      _id: generateKey(`${language}-row`, Math.random(), updatedTables[tableIndex].rows.length),
      cells: Array(headers.length).fill('')
    });
    setFormData(prev => ({ ...prev, [tableKey]: updatedTables }));
  };

  const addHeader = (language, tableIndex) => {
    const tableKey = `${language}Tables`;
    const updatedTables = [...formData[tableKey]];
    updatedTables[tableIndex].headers.push('');
    updatedTables[tableIndex].rows.forEach(row => {
      row.cells.push('');
    });
    setFormData(prev => ({ ...prev, [tableKey]: updatedTables }));
  };

  const removeTable = (language, tableIndex) => {
    const tableKey = `${language}Tables`;
    const updatedTables = formData[tableKey].filter((_, i) => i !== tableIndex);
    setFormData(prev => ({ ...prev, [tableKey]: updatedTables }));
  };

  const removeRow = (language, tableIndex, rowIndex) => {
    const tableKey = `${language}Tables`;
    const updatedTables = [...formData[tableKey]];
    updatedTables[tableIndex].rows = updatedTables[tableIndex].rows.filter((_, i) => i !== rowIndex);
    setFormData(prev => ({ ...prev, [tableKey]: updatedTables }));
  };

  const removeHeader = (language, tableIndex, headerIndex) => {
    const tableKey = `${language}Tables`;
    const updatedTables = [...formData[tableKey]];
    updatedTables[tableIndex].headers = updatedTables[tableIndex].headers.filter((_, i) => i !== headerIndex);
    updatedTables[tableIndex].rows.forEach(row => {
      row.cells = row.cells.filter((_, i) => i !== headerIndex);
    });
    setFormData(prev => ({ ...prev, [tableKey]: updatedTables }));
  };

  // Render function for tables
  const renderTable = (language, table, tableIndex) => {
    const langPrefix = language.toLowerCase();
    return (
      <Box  key={generateKey(`${langPrefix}-table`, table._id, tableIndex)} sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <TextField
            label="Table Title"
            value={table.title}
            onChange={(e) => {
              const updatedTables = [...formData[`${language}Tables`]];
              updatedTables[tableIndex].title = e.target.value;
              setFormData(prev => ({ ...prev, [`${language}Tables`]: updatedTables }));
            }}
            fullWidth
            sx={{ mr: 2 }}
            required
          />
          <Tooltip title="Remove Table">
            <IconButton onClick={() => removeTable(language, tableIndex)} color="error">
              <Delete />
            </IconButton>
          </Tooltip>
        </Stack>

        {/* Add Table Date Field */}
        <TextField
          label="Table Date"
          type="date"
          value={table.TableDate || ''}
          onChange={(e) => {
            const updatedTables = [...formData[`${language}Tables`]];
            updatedTables[tableIndex].TableDate = e.target.value;
            setFormData(prev => ({ ...prev, [`${language}Tables`]: updatedTables }));
          }}
          fullWidth
          sx={{ mb: 2 }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Typography variant="subtitle2" gutterBottom>Headers</Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
          {table.headers.map((header, headerIndex) => (
            <Chip
              key={generateKey(`${langPrefix}-header`, headerIndex, headerIndex)}
              label={
                <TextField
                  size="small"
                  value={header}
                  onChange={(e) => {
                    const updatedTables = [...formData[`${language}Tables`]];
                    updatedTables[tableIndex].headers[headerIndex] = e.target.value;
                    setFormData(prev => ({ ...prev, [`${language}Tables`]: updatedTables }));
                  }}
                  sx={{ width: '100px' }}
                />
              }
              onDelete={() => removeHeader(language, tableIndex, headerIndex)}
              sx={{ mb: 1 }}
            />
          ))}
          <Tooltip title="Add Header">
            <IconButton 
              size="small" 
              onClick={() => addHeader(language, tableIndex)}
            >
              <Add fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>

        <Typography variant="subtitle2" gutterBottom>Rows</Typography>
        <Box sx={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Sr.No</th>
                {table.headers.map((header, i) => (
                  <th key={generateKey(`${langPrefix}-th`, i, i)} style={{ padding: '8px', border: '1px solid #ddd' }}>
                    {header || `Column ${i+1}`}
                  </th>
                ))}
                <th style={{ padding: '8px', border: '1px solid #ddd' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={generateKey(`${langPrefix}-row`, row._id, rowIndex)}>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{rowIndex + 1}</td>
                  {row.cells.map((cell, cellIndex) => (
                    <td key={generateKey(`${langPrefix}-cell`, cellIndex, cellIndex)} style={{ padding: '8px', border: '1px solid #ddd' }}>
                      <TextField
                        fullWidth
                        size="small"
                        value={cell}
                        onChange={(e) => {
                          const updatedTables = [...formData[`${language}Tables`]];
                          updatedTables[tableIndex].rows[rowIndex].cells[cellIndex] = e.target.value;
                          setFormData(prev => ({ ...prev, [`${language}Tables`]: updatedTables }));
                        }}
                      />
                    </td>
                  ))}
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                    <Tooltip title="Remove Row">
                      <IconButton 
                        size="small" 
                        onClick={() => removeRow(language, tableIndex, rowIndex)}
                        color="error"
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
        <Button
          variant="outlined"
          size="small"
          startIcon={<Add />}
          onClick={() => addRow(language, tableIndex)}
          sx={{ mt: 1 }}
        >
          Add Row
        </Button>
      </Box>
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Success/Error Snackbars */}
      <Snackbar open={!!success} autoHideDuration={6000} onClose={() => setSuccess(null)}>
        <Alert onClose={() => setSuccess(null)} severity="success" sx={{ width: '100%' }}>
          {success}
        </Alert>
      </Snackbar>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>

      {/* Main Content */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Events Management</Typography>
        <Button variant="contained" color="primary" startIcon={<Add />} onClick={handleCreateClick}>
          Create Event
        </Button>
      </Stack>

      {/* Search and Filters */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSearch}>
              <TextField
                fullWidth
                label="Search Events"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
                  endAdornment: searchTerm && (
                    <IconButton onClick={() => setSearchTerm('')} edge="end">
                      <Clear />
                    </IconButton>
                  )
                }}
              />
            </form>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={filters.includeDeleted ? 'all' : 'active'}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  includeDeleted: e.target.value === 'all'
                }))}
                label="Status"
              >
                <MenuItem value="active">Active Only</MenuItem>
                <MenuItem value="all">Include Deleted</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={filters.sort}
                onChange={(e) => setFilters(prev => ({ ...prev, sort: e.target.value }))}
                label="Sort By"
              >
                <MenuItem value="-createdAt">Newest First</MenuItem>
                <MenuItem value="createdAt">Oldest First</MenuItem>
                <MenuItem value="EnName">Name (A-Z)</MenuItem>
                <MenuItem value="-EnName">Name (Z-A)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* Events Table */}
      <Paper elevation={3} sx={{ mb: 3 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>English Name</TableCell>
                <TableCell>Hindi Name</TableCell>
                <TableCell>Slug</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : events.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No events found
                  </TableCell>
                </TableRow>
              ) : (
                events.map((event, index) => (
                  <TableRow key={generateKey('event', event._id, index)}>
                    <TableCell>{event.EnName}</TableCell>
                    <TableCell>{event.HiName}</TableCell>
                    <TableCell>{event.Slug}</TableCell>
                    <TableCell>
                      {event.isDeleted ? (
                        <Chip label="Deleted" color="error" size="small" />
                      ) : (
                        <Chip label="Active" color="success" size="small" />
                      )}
                    </TableCell>
                    <TableCell>
                      {new Date(event.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Tooltip title="View">
                          <IconButton onClick={() => handleEditClick(event)} color="info">
                            <Visibility />
                          </IconButton>
                        </Tooltip>
                        {!event.isDeleted && (
                          <>
                            <Tooltip title="Edit">
                              <IconButton onClick={() => handleEditClick(event)} color="primary">
                                <Edit />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton
                                onClick={() => {
                                  setSelectedEvent(event);
                                  setDeleteDialogOpen(true);
                                }}
                                color="error"
                              >
                                <Delete />
                              </IconButton>
                            </Tooltip>
                          </>
                        )}
                        {event.isDeleted && (
                          <Tooltip title="Restore">
                            <IconButton onClick={() => handleRestore(event._id)} color="success">
                              <Restore />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Pagination */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
        <FormControl sx={{ minWidth: 120 }}>
          <Select value={pagination.limit} onChange={handleLimitChange} size="small">
            <MenuItem value={5}>5 per page</MenuItem>
            <MenuItem value={10}>10 per page</MenuItem>
            <MenuItem value={25}>25 per page</MenuItem>
            <MenuItem value={50}>50 per page</MenuItem>
          </Select>
        </FormControl>
        <Pagination
          count={pagination.pages}
          page={pagination.page}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
        <Typography>
          Showing {(pagination.page - 1) * pagination.limit + 1}-
          {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
        </Typography>
      </Stack>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete <strong>{selectedEvent?.EnName}</strong>?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Event Form Dialog */}
      <Dialog open={formOpen} onClose={() => setFormOpen(false)} fullWidth maxWidth="lg">
        <DialogTitle>{formMode === 'create' ? 'Create New Event' : 'Edit Event'}</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleFormSubmit} sx={{ pt: 2 }}>
            <Grid container spacing={3} mb={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="English Name"
                  name="EnName"
                  value={formData.EnName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Hindi Name"
                  name="HiName"
                  value={formData.HiName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Slug"
                  name="Slug"
                  value={formData.Slug}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom>Upload Images</Typography>
            <FileUploadComponent 
              onUploadSuccess={handleImageUploadSuccess}
              onError={setError}
              defaultFolder="/public/events"
            />

            {formData.ImagesLink.length > 0 && (
              <>
                <Typography variant="h6" gutterBottom mt={3}>Images</Typography>
                {formData.ImagesLink.map((image, index) => (
                  <Grid container spacing={2} key={generateKey('image', image._id, index)} sx={{ mb: 2 }}>
                    <Grid item xs={5}>
                      <Image 
                        src={`${process.env.NEXT_PUBLIC_STORAGE}${image.Link}`}
                        alt='' height={100} width={100}/>
                    </Grid>
                    
                    <Grid item xs={1} display="flex" alignItems="center">
                      <Tooltip title="Remove Image">
                        <IconButton 
                          onClick={() => {
                            const updatedImages = formData.ImagesLink.filter((_, i) => i !== index);
                            setFormData(prev => ({ ...prev, ImagesLink: updatedImages }));
                          }}
                          color="error"
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                ))}
              </>
            )}

            <Typography variant="h6" gutterBottom mt={3}>HTML Content</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>English Content</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  variant="outlined"
                  value={formData.HtmlData}
                  onChange={(e) => setFormData(prev => ({ ...prev, HtmlData: e.target.value }))}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>Hindi Content</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={10}
                  variant="outlined"
                  value={formData.HiHtmlData}
                  onChange={(e) => setFormData(prev => ({ ...prev, HiHtmlData: e.target.value }))}
                />
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom mt={3}>English Tables</Typography>
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() => addTable('En')}
              sx={{ mb: 2 }}
            >
              Add Table
            </Button>
            {formData.EnTables.map((table, tableIndex) => renderTable('En', table, tableIndex))}

            <Typography variant="h6" gutterBottom mt={3}>Hindi Tables</Typography>
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() => addTable('Hi')}
              sx={{ mb: 2 }}
            >
              Add Table
            </Button>
            {formData.HiTables.map((table, tableIndex) => renderTable('Hi', table, tableIndex))}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              <Button onClick={() => setFormOpen(false)} sx={{ mr: 2 }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : 'Save Event'}
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
}