'use client';
import { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  Box,
  IconButton,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  Autocomplete
} from '@mui/material';
import { Add, Delete, Search, Edit, Close } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import FileUploadComponent from '@/lib/FileUpload';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function SilkRateManagement() {
  const [effectiveDate, setEffectiveDate] = useState(dayjs());
  const [fileLink, setFileLink] = useState('');
  const [rates, setRates] = useState([]);
  const [yarnTypes, setYarnTypes] = useState([]);
  const [mills, setMills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [existingRates, setExistingRates] = useState([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentRate, setCurrentRate] = useState(null);

  // Fetch Silk types, mills, and existing rates on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [yarnRes, millRes, ratesRes] = await Promise.all([
          api.get('SilkType?page=1&limit=100'), // Corresponds to yarnTypes state
          api.get('SilkNames?page=1&limit=100'), // Corresponds to mills state
          api.get('SilkRate')
        ]);
        setYarnTypes(yarnRes.data);
        setMills(millRes.data);
        setExistingRates(ratesRes.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Search functionality
  const filteredRates = existingRates.filter(rate => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();

    const hasMatchingYarnType = rate.Rates.some(r => {
        const yarnType = yarnTypes.find(yt => yt._id === r.SilkType);
        // Use EnName for SilkType
        const yarnTypeName = yarnType ? yarnType.EnName.toLowerCase() : '';
        return yarnTypeName.includes(searchLower);
    });
    
    return (
      hasMatchingYarnType ||
      dayjs(rate.EffectiveDateMonth).format('DD MMM YYYY').toLowerCase().includes(searchLower) ||
      rate.MainFileLink?.toLowerCase().includes(searchLower)
    );
  });

  const handleAddRate = () => {
    setRates([...rates, {
      SilkType: '',
      SilkNames: [{
        Mill: '',
        Rate: '',
        DyedRate: '' // Added DyedRate
      }]
    }]);
  };

  const handleEditRate = (rate) => {
    setCurrentRate(rate);
    setEffectiveDate(dayjs(rate.EffectiveDateMonth));
    setFileLink(rate.MainFileLink || '');
    // Ensure DyedRate is part of the state when editing
    const ratesWithDyedRate = rate.Rates.map(r => ({
        ...r,
        SilkNames: r.SilkNames.map(sn => ({ ...sn, DyedRate: sn.DyedRate || '' }))
    }));
    setRates(ratesWithDyedRate);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setCurrentRate(null);
    setEffectiveDate(dayjs());
    setFileLink('');
    setRates([]);
  };

  const handleYarnTypeChange = (index, value) => {
    const newRates = [...rates];
    newRates[index].SilkType = value;
    setRates(newRates);
  };

  const handleAddMillRate = (rateIndex) => {
    const newRates = [...rates];
    newRates[rateIndex].SilkNames.push({
      Mill: '',
      Rate: '',
      DyedRate: '' // Added DyedRate
    });
    setRates(newRates);
  };

  const handleMillChange = (rateIndex, millRateIndex, value) => {
    const newRates = [...rates];
    newRates[rateIndex].SilkNames[millRateIndex].Mill = value;
    setRates(newRates);
  };

  const handleRateChange = (rateIndex, millRateIndex, value) => {
    const newRates = [...rates];
    newRates[rateIndex].SilkNames[millRateIndex].Rate = parseFloat(value) || '';
    setRates(newRates);
  };
  
  // New handler for DyedRate
  const handleDyedRateChange = (rateIndex, millRateIndex, value) => {
    const newRates = [...rates];
    newRates[rateIndex].SilkNames[millRateIndex].DyedRate = parseFloat(value) || '';
    setRates(newRates);
  };

  const handleRemoveMillRate = (rateIndex, millRateIndex) => {
    const newRates = [...rates];
    newRates[rateIndex].SilkNames.splice(millRateIndex, 1);
    setRates(newRates);
  };

  const handleRemoveRate = (index) => {
    const newRates = [...rates];
    newRates.splice(index, 1);
    setRates(newRates);
  };

  const handleFileUploadSuccess = (path) => {
    setFileLink(path);
  };

  const handleSubmit = async () => {
    if (!effectiveDate) {
      alert('Please select an effective date');
      return;
    }

    if (rates.length === 0) {
      alert('Please add at least one rate');
      return;
    }

    // Validate all rates
    for (const rate of rates) {
      if (!rate.SilkType) {
        alert('Please select a Silk type for all entries');
        return;
      }

      for (const silkName of rate.SilkNames) {
        // Updated validation to include DyedRate
        if (!silkName.Mill || silkName.Rate === '' || silkName.DyedRate === '') {
          alert('Please fill all Mill, Rate, and Dyed Rate fields');
          return;
        }
      }
    }

    try {
      setIsSubmitting(true);
      const payload = {
        EffectiveDateMonth: effectiveDate.toISOString(),
        MainFileLink: fileLink,
        Rates: rates.map(rate => ({
          SilkType: rate.SilkType,
          SilkNames: rate.SilkNames.map(sn => ({
            Mill: sn.Mill,
            Rate: parseFloat(sn.Rate),
            DyedRate: parseFloat(sn.DyedRate) // Added DyedRate to payload
          }))
        }))
      };

      if (currentRate) {
        await api.put(`SilkRate/${currentRate._id}`, payload);
      } else {
        await api.post('SilkRate', payload);
      }

      alert('Silk saved successfully!');
      const ratesRes = await api.get('SilkRate');
      setExistingRates(ratesRes.data);
      handleCloseEditDialog();
    } catch (error) {
      console.error('Failed to save Silk rates:', error);
      alert(error.message || 'Failed to save Silk rates');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteRate = async (rateId) => {
    if (confirm('Are you sure you want to delete this rate?')) {
      try {
        await api.delete(`SilkRate/${rateId}`);
        const ratesRes = await api.get('SilkRate');
        setExistingRates(ratesRes.data);
        alert('Rate deleted successfully');
      } catch (error) {
        console.error('Failed to delete rate:', error);
        alert(error.message || 'Failed to delete rate');
      }
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Silk Rate Management
        </Typography>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Stack spacing={3}>
            <TextField
              label="Search Rates"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            {isLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
            ) : (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Effective Date</TableCell>
                      <TableCell>Silk Types</TableCell>
                      <TableCell>Document</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRates.map((rate) => {
                      const yarnTypeNames = rate.Rates.map(r => {
                        const yt = yarnTypes.find(yt => yt._id === r.SilkType);
                        return yt ? yt.EnName : 'Unknown'; // Use EnName for SilkType
                      }).join(', ');

                      return (
                        <TableRow key={rate._id}>
                          <TableCell>
                            {dayjs(rate.EffectiveDateMonth).format('DD MMM YYYY')}
                          </TableCell>
                          <TableCell>{yarnTypeNames}</TableCell>
                          <TableCell>
                            {rate.MainFileLink ? (
                              <Link 
                              href={`${process.env.NEXT_PUBLIC_STORAGE}${rate.MainFileLink}`} 
                              target="_blank" rel="noopener noreferrer">
                                View Document
                              </Link>
                            ) : 'No document'}
                          </TableCell>
                          <TableCell>
                            <IconButton onClick={() => handleEditRate(rate)}>
                              <Edit color="primary" />
                            </IconButton>
                            <IconButton onClick={() => handleDeleteRate(rate._id)}>
                              <Delete color="error" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Stack>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setIsEditDialogOpen(true)}
          >
            Add New Rate
          </Button>
        </Box>

        <Dialog 
          open={isEditDialogOpen} 
          onClose={handleCloseEditDialog}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>
            {currentRate ? 'Edit Silk Rate' : 'Create New Silk Rate'}
            <IconButton
              aria-label="close"
              onClick={handleCloseEditDialog}
              sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Stack spacing={3} sx={{ pt: 2 }}>
              <DatePicker
                label="Effective Date Month"
                views={['year', 'month', 'day']}
                value={effectiveDate}
                onChange={(newValue) => setEffectiveDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
              <Typography variant="h6">Upload Rate Document</Typography>
              <FileUploadComponent 
                onUploadSuccess={handleFileUploadSuccess}
                defaultFolder="/public/Silk-rates"
              />
              {fileLink && (
                <Typography variant="body2">
                  File uploaded: <a href={fileLink} target="_blank" rel="noopener noreferrer">{fileLink}</a>
                </Typography>
              )}
              <Typography variant="h6">Silk Rates</Typography>
              <Button 
                variant="contained" 
                startIcon={<Add />}
                onClick={handleAddRate}
                disabled={isLoading}
                sx={{ alignSelf: 'flex-start' }}
              >
                Add Silk Rate
              </Button>
              
              {rates.map((rate, rateIndex) => (
                <Paper key={rateIndex} variant="outlined" sx={{ p: 2 }}>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="subtitle1">Rate #{rateIndex + 1}</Typography>
                      <IconButton 
                        color="error" 
                        onClick={() => handleRemoveRate(rateIndex)}
                        size="small"
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>
                    <Autocomplete
                      options={yarnTypes}
                      getOptionLabel={(Silk) => Silk.EnName || ''}
                      value={yarnTypes.find(Silk => Silk._id === rate.SilkType) || null}
                      onChange={(event, newValue) => handleYarnTypeChange(rateIndex, newValue?._id || '')}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Silk Type"
                          fullWidth
                        />
                      )}
                      isOptionEqualToValue={(option, value) => option._id === value._id}
                    />
                    <Typography variant="body2">Mill Rates:</Typography>
                    <TableContainer component={Paper} variant="outlined">
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Mill</TableCell>
                            <TableCell>Rate (₹)</TableCell>
                            {/* New Table Header */}
                            <TableCell>Dyed Rate (₹)</TableCell>
                            <TableCell>Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rate.SilkNames.map((silkName, millRateIndex) => (
                            <TableRow key={millRateIndex}>
                              <TableCell>
                                <Autocomplete
                                  options={mills}
                                  getOptionLabel={(mill) => mill.Prefix && mill.Name ? `${mill.Prefix} - ${mill.Name}` : ''}
                                  value={mills.find(mill => mill._id === silkName.Mill) || null}
                                  onChange={(event, newValue) => handleMillChange(rateIndex, millRateIndex, newValue?._id || '')}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Mill"
                                      fullWidth
                                      size="small"
                                    />
                                  )}
                                  isOptionEqualToValue={(option, value) => option._id === value._id}
                                  sx={{ width: '100%' }}
                                />
                              </TableCell>
                              <TableCell>
                                <TextField
                                  type="number"
                                  fullWidth
                                  size="small"
                                  value={silkName.Rate}
                                  onChange={(e) => handleRateChange(rateIndex, millRateIndex, e.target.value)}
                                  inputProps={{ step: "0.01" }}
                                />
                              </TableCell>
                              {/* New Table Cell for DyedRate Input */}
                              <TableCell>
                                <TextField
                                  type="number"
                                  fullWidth
                                  size="small"
                                  value={silkName.DyedRate}
                                  onChange={(e) => handleDyedRateChange(rateIndex, millRateIndex, e.target.value)}
                                  inputProps={{ step: "0.01" }}
                                />
                              </TableCell>
                              <TableCell>
                                <IconButton
                                  size="small"
                                  color="error"
                                  onClick={() => handleRemoveMillRate(rateIndex, millRateIndex)}
                                >
                                  <Delete fontSize="small" />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Add />}
                        onClick={() => handleAddMillRate(rateIndex)}
                      >
                        Add Mill Rate
                      </Button>
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEditDialog}>Cancel</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={isSubmitting || rates.length === 0}
              startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </LocalizationProvider>
  );
}
