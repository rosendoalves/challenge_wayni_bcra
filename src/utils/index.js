const processContent = (data) => {
    const registers = data.split('\n').map(line => {
      return {
        // code_entity: parseInt(line.substring(0, 5).trim(), 10),
        // date_info: parseInt(line.substring(5, 11).trim(), 10),
        // type_identity: parseInt(line.substring(11, 13).trim(), 10),
        code_identity: parseInt(line.substring(13, 24).trim(), 10),
        // activity: parseInt(line.substring(24, 27).trim(), 10),
        status: parseInt(line.substring(27, 29).trim(), 10),
        loan: parseFloat(line.substring(29, 41).replace(',', '.')) || 0,
        // participation: parseFloat(line.substring(41, 53).replace(',', '.')) || 0,
        // warranty_granted: parseFloat(line.substring(53, 65).replace(',', '.')) || 0,
        // other_concept: parseFloat(line.substring(65, 77).replace(',', '.')) || 0,
        // guarantee_preferred_a: parseFloat(line.substring(77, 89).replace(',', '.')) || 0,
        // guarantee_preferred_b: parseFloat(line.substring(89, 101).replace(',', '.')) || 0,
        // guarantee_preferred_without: parseFloat(line.substring(101, 113).replace(',', '.')) || 0,
        // counter_guarantee_preferred_a: parseFloat(line.substring(113, 125).replace(',', '.')) || 0,
        // counter_guarantee_preferred_b: parseFloat(line.substring(125, 137).replace(',', '.')) || 0,
        // counter_guarantee_preferred_without: parseFloat(line.substring(137, 149).replace(',', '.')) || 0,
        // forecast: parseFloat(line.substring(149, 161).replace(',', '.')) || 0,
        // debt_covered: parseFloat(line.substring(161, 173).replace(',', '.')) || 0,
        // judicial_process: parseInt(line.substring(173, 174).trim(), 10) || 0,
        // refinancing: parseInt(line.substring(174, 175).trim(), 10) || 0,
        // mandatory_categorization: parseInt(line.substring(175, 176).trim(), 10) || 0,
        // legal_status: parseInt(line.substring(176, 177).trim(), 10) || 0,
        // irrecoverable: parseInt(line.substring(177, 178).trim(), 10) || 0,
        // day_late: parseInt(line.substring(178, 182).trim(), 10) || 0,
      };
    });
  
    return registers;
  };
  
  module.exports = { processContent };
  