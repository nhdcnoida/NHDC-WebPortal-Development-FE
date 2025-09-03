"use client";
import {  FaFilePdf } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { regionData } from "@/components/contact-us-data";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

const Contact = () => {
  const [selectedRegion, setSelectedRegion] = useState("ahmedabad");
  const [expandedOffices, setExpandedOffices] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const { lang } = useParams();

  // PDF: Step 2 - The main PDF generation function
const generatePdf = (data, type) => {
    const doc = new jsPDF();
    const t = (obj) => {
      if (obj === null || obj === undefined) return ''; // Handle null/undefined values
      return typeof obj === "object" ? obj[lang] || obj.en : obj;
    };

    const logoImg = new Image();
    logoImg.src = "https://storage.nhdc.org.in/nhdc/public/AppSettings/NHDC.png"; 
    logoImg.onload = () => {
      const pageWidth = doc.internal.pageSize.getWidth();
      const logoWidth = 40;
      const logoHeight = (logoImg.height * logoWidth) / logoImg.width;
      const logoX = (pageWidth - logoWidth) / 2;
      doc.addImage(logoImg, "PNG", logoX, 10, logoWidth, logoHeight);
      
      addContentAndSave();
    };
    logoImg.onerror = () => {
        console.error("Logo could not be loaded. Check the path.");
        addContentAndSave();
    }

    const addContentAndSave = () => {
      let finalY = 50;
      let pdfFileName = "contact-details.pdf";
      
      const createTableRows = (detailsObject, nameObject) => {
        // FIX #1: All data values are now wrapped in the t() function
        // to prevent [object Object] errors.
        return [
          [{ content: t(nameObject), styles: { fontStyle: 'bold', fontSize: 12 }, colSpan: 2 }],
          [t({ en: "Name of In-Charge", hi: "प्रभारी का नाम" }), t(detailsObject.nameOfInCharge)],
          [t({ en: "Designation", hi: "पद" }), t(detailsObject.designation)],
          [t({ en: "Office Address", hi: "कार्यालय का पता" }), t(detailsObject.officeAddress)],
          [t({ en: "House No./Plot No.", hi: "मकान / प्लॉट संख्या" }), t(detailsObject.houseNo)],
          [t({ en: "Street Name", hi: "गली का नाम" }), t(detailsObject.streetName)],
          [t({ en: "Nearest Land Mark", hi: "निकटतम स्थलचिह्न" }), t(detailsObject.nearestLandMark)],
          [t({ en: "City", hi: "शहर" }), t(detailsObject.city)],
          [t({ en: "District", hi: "जिला" }), t(detailsObject.district)],
          [t({ en: "State", hi: "राज्य" }), t(detailsObject.state)],
          [t({ en: "Pin code", hi: "पिन कोड" }), t(detailsObject.pinCode)],
          [t({ en: "Mobile No.", hi: "मोबाइल नंबर" }), t(detailsObject.mobileNo)],
          // [t({ en: "Landline", hi: "लैंडलाइन" }), t(detailsObject.landline)],
          [t({ en: "E-Mail", hi: "ई-मेल" }), t(detailsObject.email)],
          [t({ en: "GST No.", hi: "जीएसटी संख्या" }), t(detailsObject.gstNo) || '-'],
        ];
      };
      
      const drawTable = (details, name, startY) => {
        autoTable(doc, { 
          startY: startY,
          body: createTableRows(details, name),
          theme: 'grid',
          styles: { cellPadding: 2, fontSize: 9 },
          columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 50 },
            1: { cellWidth: 'auto' },
          },
          didDrawPage: (data) => {
            finalY = data.cursor.y;
          }
        });
        return doc.lastAutoTable.finalY + 5;
      };
      
      if (type === 'region') {
        pdfFileName = `${t(data.name)}.pdf`;
        
        // Regional Office
        finalY = drawTable(data.details, data.name, finalY);

        // Branches
        if (data.branches?.length > 0) {
          doc.addPage();
          doc.text(`${t({ en: "Branch Offices", hi: "शाखा कार्यालय" })}`, 14, 20);
          let branchY = 30;
          data.branches.forEach(branch => {
            branchY = drawTable(branch.details, branch.name, branchY);
            if (branchY > doc.internal.pageSize.getHeight() - 50) {
              doc.addPage();
              branchY = 20;
            }
          });
        }
        
        // Warehouses
        if (data.warehouses?.length > 0) {
          doc.addPage();
          doc.text(`${t({ en: "Warehouses", hi: "गोदाम" })}`, 14, 20);
          let warehouseY = 30;
          data.warehouses.forEach(warehouse => {
            warehouseY = drawTable(warehouse.details, warehouse.name, warehouseY);
            if (warehouseY > doc.internal.pageSize.getHeight() - 50) {
              doc.addPage();
              warehouseY = 20;
            }
          });
        }
      } else { 
        pdfFileName = `${t(data.name)}.pdf`;
        // FIX #2: Pass 'data.details' instead of 'data' to the table drawer
        // This ensures the correct object is used for individual offices.
        drawTable(data.details, data.name, finalY);
      }
      
      doc.save(pdfFileName);
    };
  };

  const handleRegionClick = (regionId) => {
    setSelectedRegion(regionId);
    setSearchTerm("");
  };

  const toggleOfficeExpansion = (officeId, type) => {
    const uniqueId = `${type}-${officeId}`;
    setExpandedOffices((prev) => ({
      ...prev,
      [uniqueId]: !prev[uniqueId],
    }));
  };

  const t = (obj) => (typeof obj === "object" ? obj[lang] || obj.en : obj);

  const renderContactDetails = (details) => (
    <div style={{ padding: "15px", backgroundColor: "#f9f9f9" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          fontSize: "14px",
        }}
      >
        <div>
          <strong>
            {t({ en: "Name of In-Charge", hi: "प्रभारी का नाम" })}
          </strong>
        </div>
        <div>{t(details.nameOfInCharge)}</div>

        <div>
          <strong>{t({ en: "Designation", hi: "पद" })}</strong>
        </div>
        <div>{t(details.designation)}</div>

        <div>
          <strong>{t({ en: "Office Address", hi: "कार्यालय का पता" })}</strong>
        </div>
        <div>{t(details.officeAddress)}</div>

        <div>
          <strong>
            {t({ en: "House No./Plot No.", hi: "मकान / प्लॉट संख्या" })}
          </strong>
        </div>
        <div>{t(details.houseNo)}</div>

        <div>
          <strong>{t({ en: "Street Name", hi: "गली का नाम" })}</strong>
        </div>
        <div>{t(details.streetName)}</div>

        <div>
          <strong>
            {t({ en: "Nearest Land Mark", hi: "निकटतम स्थलचिह्न" })}
          </strong>
        </div>
        <div>{t(details.nearestLandMark)}</div>

        <div>
          <strong>{t({ en: "City", hi: "शहर" })}</strong>
        </div>
        <div>{t(details.city)}</div>

        <div>
          <strong>{t({ en: "District", hi: "जिला" })}</strong>
        </div>
        <div>{t(details.district)}</div>

        <div>
          <strong>{t({ en: "State", hi: "राज्य" })}</strong>
        </div>
        <div>{t(details.state)}</div>

        <div>
          <strong>{t({ en: "Pin code", hi: "पिन कोड" })}</strong>
        </div>
        <div>{details.pinCode}</div>

        <div>
          <strong>{t({ en: "Mobile No.", hi: "मोबाइल नंबर" })}</strong>
        </div>
        <div>{details.mobileNo}</div>

        {/* <div>
          <strong>{t({ en: "Landline", hi: "लैंडलाइन" })}</strong>
        </div>
        <div>{details.landline}</div> */}

        <div>
          <strong>{t({ en: "E-Mail", hi: "ई-मेल" })}</strong>
        </div>
        <div>{details.email}</div>

        <div>
          <strong>{t({ en: "GST No.", hi: "जीएसटी संख्या" })}</strong>
        </div>
        <div>{details.gstNo ? details.gstNo : `-`}</div>
      </div>
    </div>
  );
  
  const matchesSearch = (details) => {
    if (!searchTerm.trim()) return true;
    const search = searchTerm.toLowerCase();
    return (
      t(details.nameOfInCharge)?.toLowerCase().includes(search) ||
      t(details.designation)?.toLowerCase().includes(search) ||
      t(details.email)?.toLowerCase().includes(search) ||
      t(details.city)?.toLowerCase().includes(search) ||
      t(details.mobileNo)?.toLowerCase().includes(search)
    );
  };

  const getMatchingRegions = () => {
    if (!searchTerm.trim()) {
      return [regionData[selectedRegion]];
    }
    const matches = [];
    Object.values(regionData).forEach((reg) => {
      const mainMatch = matchesSearch(reg.details);
      const branchMatch = reg.branches?.some((b) => matchesSearch(b.details));
      const warehouseMatch = reg.warehouses?.some((w) =>
        matchesSearch(w.details)
      );
      if (mainMatch || branchMatch || warehouseMatch) {
        matches.push(reg);
      }
    });
    return matches;
  };

  const regionsToShow = getMatchingRegions();

  useEffect(() => {
    if (searchTerm.trim()) {
      const newExpandedOffices = {};
      
      regionsToShow.forEach((region) => {
        const filteredBranches = region.branches?.filter((b) => matchesSearch(b.details)) || [];
        filteredBranches.forEach((branch) => {
          newExpandedOffices[`branch-${branch.id}`] = true;
        });

        const filteredWarehouses = region.warehouses?.filter((w) => matchesSearch(w.details)) || [];
        filteredWarehouses.forEach((warehouse) => {
          newExpandedOffices[`warehouse-${warehouse.id}`] = true;
        });
      });
      
      setExpandedOffices(newExpandedOffices);
    } else {
      setExpandedOffices({});
    }
  }, [searchTerm, selectedRegion]);

  const renderRegions = () =>
    regionsToShow.map((region) => {
      const regionMatches = matchesSearch(region.details);
      const filteredBranches =
        region.branches?.filter((b) => matchesSearch(b.details)) || [];
      const filteredWarehouses =
        region.warehouses?.filter((w) => matchesSearch(w.details)) || [];

      if (
        !regionMatches &&
        filteredBranches.length === 0 &&
        filteredWarehouses.length === 0
      ) {
        return null;
      }

      return (
        <div
          key={region.id}
          style={{ marginBottom: "40px", minWidth: "300px" }}
        >
          <div
            style={{
              backgroundColor: region.color,
              color: "white",
              padding: "15px",
              borderRadius: "12px 12px 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "20px" }}>🏢</span>
              <div>
                <h3 style={{ margin: 0 }}>{t(region.name)}</h3>
                <p style={{ margin: 0, fontSize: "14px" }}>
                  {t(region.statesName)}
                </p>
              </div>
            </div>
            {/* PDF: Step 3 - Add onClick to parent/region button */}
            <button
              onClick={() => generatePdf(region, 'region')}
              title={`Download PDF for ${t(region.name)}`}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
              }}
            >
             <span className=" text-3xl text-red-500 flex items-center">
                             <FaFilePdf className="" />
                           </span>
            </button>
          </div>

          {regionMatches && renderContactDetails(region.details)}

          {(!searchTerm.trim() ? region.branches : filteredBranches)?.length > 0 && (
            <div style={{ marginTop: "20px", paddingLeft: "15px" }}>
              <h4 style={{ marginBottom: "10px", color: "#DAA520" }}>
                🏢{" "}
                {t({
                  en: "Branch Offices under",
                  hi: "के अंतर्गत शाखा कार्यालय",
                })}{" "}
                {t(region.name)}
              </h4>
           {[...(!searchTerm.trim() ? region.branches : filteredBranches)]
 .sort((a, b) => t(a.name).localeCompare(t(b.name)))
 .map((office) => (
                <div
                  key={office.id}
                  style={{
                    marginBottom: "10px",
                    border: "1px solid #DAA520",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#DAA520",
                      color: "white",
                      padding: "10px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    onClick={() => toggleOfficeExpansion(office.id, "branch")}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span>🏢</span>
                      <span>{t(office.name)}</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                      {/* PDF: Step 4 - Add PDF button for child/branch */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents the accordion from toggling
                          generatePdf(office, 'branch');
                        }}
                        title={`Download PDF for ${t(office.name)}`}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                      >
                           <span className=" text-3xl text-red-500 flex items-center">
                             <FaFilePdf className="" />
                           </span>
                      </button>
                      <span style={{ fontSize: "18px" }}>
                        {expandedOffices[`branch-${office.id}`] ? "▼" : "▶"}
                      </span>
                    </div>
                  </div>
                  {expandedOffices[`branch-${office.id}`] && renderContactDetails(office.details)}
                </div>
              ))}
            </div>
          )}

          {(!searchTerm.trim() ? region.warehouses : filteredWarehouses)?.length > 0 && (
            <div style={{ marginTop: "20px", paddingLeft: "15px" }}>
              <h4 style={{ marginBottom: "10px", color: "#8FBC8F" }}>
                🏠 {t({ en: "Warehouses under", hi: "के अंतर्गत गोदाम" })}{" "}
                {t(region.name)}
              </h4>
           {[...(!searchTerm.trim() ? region.warehouses : filteredWarehouses)]
 .sort((a, b) => t(a.name).localeCompare(t(b.name)))
 .map((warehouse) => (
                <div
                  key={warehouse.id}
                  style={{
                    marginBottom: "10px",
                    border: "1px solid #8FBC8F",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#8FBC8F",
                      color: "white",
                      padding: "10px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    onClick={() => toggleOfficeExpansion(warehouse.id, "warehouse")}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span>🏠</span>
                      <span>{t(warehouse.name)}</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                      {/* PDF: Step 5 - Add PDF button for child/warehouse */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents the accordion from toggling
                          generatePdf(warehouse, 'warehouse');
                        }}
                        title={`Download PDF for ${t(warehouse.name)}`}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                      >
                           <span className=" text-3xl text-red-500 flex items-center">
                             <FaFilePdf className="" />
                           </span>
                      </button>
                      <span style={{ fontSize: "18px" }}>
                        {expandedOffices[`warehouse-${warehouse.id}`]
                          ? "▼"
                          : "▶"}
                      </span>
                    </div>
                  </div>
                  {expandedOffices[`warehouse-${warehouse.id}`] && renderContactDetails(warehouse.details)}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-5xl my-5 text-[#4b2c2c] font-bold">
        {t({ en: "Contact Us", hi: "संपर्क करें" })}
      </h1>

      <input
        type="text"
        placeholder={t({
          en: "Search by Name of In-Charge, Designation, City, Email, Mobile No...",
          hi: "प्रभारी का नाम, पद, शहर, ईमेल, मोबाइल नंबर से खोजें...",
        })}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "14px",
          width: "100%",
          maxWidth: "500px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

   <div className="flex gap-[30px] flex-wrap pl-0 lg:pl-[25px]">
        <div style={{ flex: "1", minWidth: "400px"}}>
          <h1
            style={{
              marginBottom: "15px",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: 6,
            }}
          >
            {t({ en: "Select a region ", hi: "एक क्षेत्र चुनें" })}
          </h1>
        
          <div style={{ marginBottom: "20px" }}>
            {Object.values(regionData)
              .sort((a, b) => a.name.en.localeCompare(b.name.en))
              .map((region) => {
                const isSelected = selectedRegion === region.id;
                return (
                  <div
                    key={region.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "5px",
                      fontSize: "12px",
                      cursor: "pointer",
                      padding: "5px",
                      borderRadius: "5px",
                      paddingBottom: "20px",
                      backgroundColor: isSelected ? "#e0f7fa" : "transparent",
                      border: isSelected ? "1px solid #007B8A" : "1px solid transparent",
                      width:"90%"
                    }}
                    onClick={() => handleRegionClick(region.id)}
                  >
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: region.color,
                        marginRight: "8px",
                        border: isSelected ? "2px solid white" : "1px solid #333",
                        boxShadow: isSelected ? "0 0 5px rgba(0,0,0,0.3)" : "none",
                      }}
                    ></div>
                    <span style={{ fontSize: "16px" }}>
                      <span style={{ fontWeight: isSelected ? "bold" : "normal" }}>
                        {t(region.name)}
                      </span>{" "}
                      :-{" "}
                      <span style={{ color: "#555" }}>{t(region.statesName)}</span>
                    </span>
                  </div>
                );
              })}
          </div>
        </div>

        <div style={{ flex: "1" }}>
          {renderRegions()}
        </div>
      </div>
    </div>
  );
};

export default Contact;