const processContent = (data) => {
    const recordsMap = new Map();
  
    data.split('\n').forEach(line => {
      const codeIdentity = parseInt(line.substring(13, 24).trim(), 10);
      const status = parseInt(line.substring(27, 29).trim(), 10);
      const loan = parseFloat(line.substring(29, 41).replace(',', '.')) || 0;
  
      if (!recordsMap.has(codeIdentity)) {
        // Si no existe el registro, lo inicializamos
        recordsMap.set(codeIdentity, {
          code_identity: codeIdentity,
          status: status,
          loan: loan
        });
      } else {
        // Si ya existe, actualizamos los campos correspondientes
        const existingRecord = recordsMap.get(codeIdentity);
        existingRecord.loan = (parseFloat(existingRecord.loan) + loan).toFixed(2);
        existingRecord.status = Math.max(existingRecord.status, status);
      }
    });
  
    // Convertir el mapa de registros nuevamente a un array
    const unifiedRecords = Array.from(recordsMap.values());
  
    // Redondear los valores de loan en el array resultante
    unifiedRecords.forEach(record => {
      record.loan = parseFloat(record.loan).toFixed(2);
    });
  
    return unifiedRecords;
  };
  
  module.exports = { processContent };
  