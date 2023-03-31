(function() {
    // Array of Data
    const data = [
      { name: 'Tom Holand', age: 30, dob: '01/01/1999', email: 'tom@xyz.com', company: 'Marvel Studios' },
      { name: 'Johnny Depp', age: 25, dob: '05/05/1976', email: 'john@xyz.com', company: 'Disney' },
      { name: 'Emma Watson', age: 35, dob: '12/12/1992', email: 'emma@xyz.com', company: 'JK Studios' },
      { name: 'Stan Lee', age: 28, dob: '09/09/1945', email: 'stan@xyz.com', company: 'Marvel Studios' },
      { name: 'Christopher', age: 32, dob: '03/03/2002', email: 'chris@yxc.com', company: 'TCS Industries' }
    ];
    
    // Creating a Table
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const headers = ['Name', 'Age', 'DOB', 'Email', 'Company'];
    
    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      header.style.fontWeight = 'bold';
      headerRow.appendChild(header);
    });
    
    table.appendChild(headerRow);
    
    // Create a rows
    data.forEach(item => {
      const row = document.createElement('tr');
      const properties = Object.values(item);
      properties.forEach(property => {
        const cell = document.createElement('td');
        cell.textContent = property;
        row.appendChild(cell);
      });
      
      table.appendChild(row);
    });
    
    
    document.body.appendChild(table);
  })();
  