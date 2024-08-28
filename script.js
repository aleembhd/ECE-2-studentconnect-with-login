const students = [

  { rollNumber: '22WJ1A0465', name: 'DASARI JOSEPH DAVID PAUL', parentPhone: '9866775630', parentName: 'DASARI PRASADA RAO', studentPhone: '8985002400' },
  { rollNumber: '22WJ1A0466', name: 'DEVIREDDY POOJITHA', parentPhone: '9908877647', parentName: 'DEVIREDDY RAGHAVA REDDY', studentPhone: '9908877647' },
  { rollNumber: '22WJ1A0467', name: 'DHARAVATH NAVEEN', parentPhone: '9652727976', parentName: 'DHARAVATH SHIVA', studentPhone: '9505079769' },
  { rollNumber: '22WJ1A0468', name: 'DODDA AKHIL', parentPhone: '9502657588', parentName: 'DODDA RAMESH', studentPhone: '7671821182' },
  { rollNumber: '22WJ1A0469', name: 'DODDA JYOTHIKA', parentPhone: '9963614071', parentName: 'DODDA YUGENDER', studentPhone: '9849192450' },
  { rollNumber: '22WJ1A0470', name: 'DONTHA ROSHAN', parentPhone: '9441327856', parentName: 'DONTHA VIJAY', studentPhone: '9391802820' },
  { rollNumber: '22WJ1A0471', name: 'DORISHETTI SAI', parentPhone: '9959768900', parentName: 'DORISHETTI LACHAIAH', studentPhone: '9676467491' },
  { rollNumber: '22WJ1A0472', name: 'DUDAPAKA GANESH', parentPhone: '8897443818', parentName: 'DUDAPAKA MAHESH', studentPhone: '8074428864' },
  { rollNumber: '22WJ1A0473', name: 'DUNUKU HANOKU', parentPhone: '9948925594', parentName: 'DUNUKU KRISHNA', studentPhone: '8790358178' },
  { rollNumber: '22WJ1A0474', name: 'E V S KRISHNA SAKET', parentPhone: '7702037926', parentName: 'E V S RAJANIKANTH', studentPhone: '9618479484' },
  { rollNumber: '22WJ1A0475', name: 'EDAM MANISHANKAR', parentPhone: '9848325065', parentName: 'EDAM PANDU', studentPhone: '9848325065' },
  { rollNumber: '22WJ1A0476', name: 'EDAMONI SAIDULU YADAV', parentPhone: '6302143870', parentName: 'EDAMONI THIRUPATHAIAH', studentPhone: '7569147142' },
  { rollNumber: '22WJ1A0477', name: 'EDLA JEEVANA', parentPhone: '8179041746', parentName: 'EDLA YADAGIRI', studentPhone: '9959670408' },
  { rollNumber: '22WJ1A0478', name: 'ENUGULA RAMCHARAN', parentPhone: '8374928437', parentName: 'ENUGULA NARSAIAH', studentPhone: '9866330126' },
  { rollNumber: '22WJ1A0479', name: 'ESLAVATH GANESH', parentPhone: '7032832116', parentName: 'ESLAVATH PRAVEEN', studentPhone: '7032162116' },
  { rollNumber: '22WJ1A0480', name: 'ESLAVATH NAGARAJU', parentPhone: '9553862669', parentName: 'ESLAVATH CHANDAR', studentPhone: '6300057024' },
  { rollNumber: '22WJ1A0481', name: 'G PAVANI', parentPhone: '9441872094', parentName: 'G BUCHANNA', studentPhone: '8008371730' },
  { rollNumber: '22WJ1A0482', name: 'G PRAVEEN KUMAR', parentPhone: '9949767591', parentName: 'G GOVINDU', studentPhone: '9381468893' },
  { rollNumber: '22WJ1A0483', name: 'G UDAY KIRAN', parentPhone: '9989357805', parentName: 'G ASHOK KUMAR', studentPhone: '9640327805' },
  { rollNumber: '22WJ1A0484', name: 'GADDAM NARESH', parentPhone: '9618249816', parentName: 'GADDAM VENKATESHWARLU', studentPhone: '7981433822' },
  { rollNumber: '22WJ1A0485', name: 'GADE SHIVAJI', parentPhone: '9533472796', parentName: 'GADE NARSINGA RAO', studentPhone: '6301247924' },
  { rollNumber: '22WJ1A0486', name: 'GAJBEERKAR SRAVAN KUMAR', parentPhone: '7702763794', parentName: 'GAJBEERKAR HUSSAIN', studentPhone: '7993556024' },
  { rollNumber: '22WJ1A0487', name: 'GAJJALA VENKATESH', parentPhone: '9908994896', parentName: 'GAJJALA HARIBABU', studentPhone: '9676248621' },
  { rollNumber: '22WJ1A0488', name: 'GAMINI NAGAKRISHNA BHANU PRAKASH RAO', parentPhone: '9441341984', parentName: 'GAMINI VENKATRATHNAM', studentPhone: '9121008262' },
  { rollNumber: '22WJ1A0489', name: 'GANAPURAM SRAVANTHI', parentPhone: '9849207405', parentName: 'GANAPURAM KRISHNAIAH', studentPhone: '9182244302' },
  { rollNumber: '22WJ1A0490', name: 'GANDU KISHORE', parentPhone: '8187003992', parentName: 'GANDU RADHA KRISHNA', studentPhone: '9347883602' },
  { rollNumber: '22WJ1A0491', name: 'GANDU VINAY', parentPhone: '9951504761', parentName: 'GANDU KRISHNA MURTHI', studentPhone: '8501047611' },
  { rollNumber: '22WJ1A0492', name: 'GEENUGAPALLI KARUNYA', parentPhone: '9963440040', parentName: 'GEENUGAPALLI SRINAIAH', studentPhone: '7330797337' },
  { rollNumber: '22WJ1A0493', name: 'GILAKATHULA SAI TEJA', parentPhone: '8341116779', parentName: 'GILAKATHULA RAMESH', studentPhone: '6303073686' },
  { rollNumber: '22WJ1A0494', name: 'GOLLA YESHWANTH', parentPhone: '7989171135', parentName: 'G SATYA NARAYANA', studentPhone: '6305448795' },
  { rollNumber: '22WJ1A0495', name: 'GOPE NAGESHWARI', parentPhone: '9010250242', parentName: 'GOPE RAVI', studentPhone: '8688463028' },
  { rollNumber: '22WJ1A0496', name: 'GOSHETTI AJAY', parentPhone: '9849540690', parentName: 'GOSHETTI RAMESH', studentPhone: '9392827134' },
  { rollNumber: '22WJ1A0497', name: 'GOUTHAM RAJKUMAR', parentPhone: '7337564877', parentName: 'GOUTHAM RAJAIAH', studentPhone: '7080730302' },
  { rollNumber: '22WJ1A0498', name: 'GUDLANARVA AJAY KUMAR', parentPhone: '7569588530', parentName: 'GUDLANARVA JANGAIAH', studentPhone: '9505570853' },
  { rollNumber: '22WJ1A0499', name: 'GUGULOTH SWETHA', parentPhone: '9848236841', parentName: 'GUGULOTH SRINU', studentPhone: '9347817119' },
  { rollNumber: '22WJ1A04A0', name: 'GUNDABOINA MADHAVI', parentPhone: '8897425078', parentName: 'GUNDBOINA VENKATAIAH', studentPhone: '9381169435' },
  { rollNumber: '22WJ1A04A1', name: 'GUNDALA RAKESH', parentPhone: '9849149359', parentName: 'GUNDALA NARSIMHA', studentPhone: '8374019884' },
  { rollNumber: '22WJ1A04A2', name: 'GUNNA ADITHYA', parentPhone: '9550090898', parentName: 'GUNNA KRISHNAIAH', studentPhone: '8047132002' },
  { rollNumber: '22WJ1A04A3', name: 'GUNTAKANDLA NANDHA KISHOR', parentPhone: '6305625791', parentName: 'GUNTAKANDLA SUJATHA', studentPhone: '9347182379' },
  { rollNumber: '22WJ1A04A4', name: 'GURRALA ANUSHA', parentPhone: '9866153878', parentName: 'G BALAIAH', studentPhone: '9381713386' },
  { rollNumber: '22WJ1A04A5', name: 'GURRAPU PRANATHI', parentPhone: '9948911088', parentName: 'GURRAPU GOVARDHAN', studentPhone: '9550289145' },
  { rollNumber: '22WJ1A04A6', name: 'HANUMANDLA VAMSHI', parentPhone: '9390752715', parentName: 'HANUMANDLA BABU', studentPhone: '8919736230' },
  { rollNumber: '22WJ1A04A7', name: 'HARIJAN MADHU', parentPhone: '9666541502', parentName: 'HARIJAN DASTHAIAH', studentPhone: '8919782836' },
  { rollNumber: '22WJ1A04A8', name: 'INAPANURI SURESH', parentPhone: '9640828823', parentName: 'INAPANURI PRASADA RAO', studentPhone: '9392219047' },
  { rollNumber: '22WJ1A04A9', name: 'J HARSHITHA', parentPhone: '9948759243', parentName: 'J RAJESHWAR', studentPhone: '6302943141' },
  { rollNumber: '22WJ1A04B0', name: 'JADI SHIVAMANI', parentPhone: '9381055992', parentName: 'JADI ASHOK', studentPhone: '9959957702' },
  { rollNumber: '22WJ1A04B1', name: 'JADI VARUN TEJA', parentPhone: '9441603591', parentName: 'JADI YUGENDER', studentPhone: '7842411051' },
  { rollNumber: '22WJ1A04B2', name: 'JAKKULA GOPI KRISHNA', parentPhone: '9989648077', parentName: 'JAKKULA LINGAIAH', studentPhone: '9550858077' },
  { rollNumber: '22WJ1A04B3', name: 'JAMALPUR REVANTH', parentPhone: '9849092541', parentName: 'JAMALPUR BALARAJU', studentPhone: '9346935308' },
  { rollNumber: '22WJ1A04B5', name: 'JARAPALA VASU', parentPhone: '9849634938', parentName: 'JARAPALA BALU', studentPhone: '6304282917' },
  { rollNumber: '22WJ1A04B6', name: 'JERRIPOTHULA AKHILA', parentPhone: '9666227484', parentName: 'JERRIPOTHULA SAIDULU', studentPhone: '9030609718' },
  { rollNumber: '22WJ1A04B7', name: 'JONNAWADA CHENCHU LAXMI PRIYA', parentPhone: '9848606828', parentName: 'J RADHA KRISHNA', studentPhone: '7569127774' },
  { rollNumber: '22WJ1A04B8', name: 'JULAKANTI SRILAXMI', parentPhone: '9949722564', parentName: 'JULAKANTI NAGARAJU', studentPhone: '8247793771' },
  { rollNumber: '22WJ1A04B9', name: 'K ARCHANA', parentPhone: '9908166147', parentName: 'K MADHAVACHARI', studentPhone: '8639925355' },
  { rollNumber: '22WJ1A04C0', name: 'K SURI', parentPhone: '9133534811', parentName: 'K RAMULU', studentPhone: '6302724327' },
  { rollNumber: '22WJ1A04C1', name: 'K VARDHAN KUMAR GOUD', parentPhone: '9703733327', parentName: 'K JAGADEESWAR GOUD', studentPhone: '6303290655' },
  { rollNumber: '22WJ1A04C2', name: 'KADARI ABHIGNA', parentPhone: '9885774872', parentName: 'KADARI VENKANNA', studentPhone: '9381365911' },
  { rollNumber: '22WJ1A04C3', name: 'KAIKALA CHIRU MANI SANDEEP', parentPhone: '9948604599', parentName: 'KAIKALA VENKATESWRA PRASAD', studentPhone: '9502210299' },
  { rollNumber: '22WJ1A04C4', name: 'KALLEM VINAY', parentPhone: '9849264353', parentName: 'KALLEM SRINIVAS', studentPhone: '8179323132' },
  { rollNumber: '22WJ1A04C5', name: 'KANCHARAKUNTLA MADHUKAR REDDY', parentPhone: '9010979305', parentName: 'KANCHARAKUNTLA NARSI REDDY', studentPhone: '9573362716' },
  { rollNumber: '22WJ1A04C6', name: 'KANNEKANTI THARUNI', parentPhone: '9394600128', parentName: 'KANNEKANTI JANARDHANA CHARY', studentPhone: '9573062637' },
  { rollNumber: '22WJ1A04C7', name: 'KANNEVENA KARTHIK', parentPhone: '6305872367', parentName: 'ILAIAH', studentPhone: '7337281797' },
  { rollNumber: '22WJ1A04C8', name: 'KAPPARI SRUJANA REDDY', parentPhone: '9989342688', parentName: 'KAPPARI BADRA REDDY', studentPhone: '7396242688' },
  { rollNumber: '23WJ5A0411', name: 'KAMUTAM DAMODHAR', parentPhone: '9000355841', parentName: 'Devaraju', studentPhone: '8977171841' },
  { rollNumber: '23WJ5A0412', name: 'KATAMONI PRATHYUSH GOUD', parentPhone: '9640412552', parentName: '', studentPhone: '7993075875' },
  { rollNumber: '23WJ5A0413', name: 'KOTIMIRI VIVEK KUMAR', parentPhone: '9550578681', parentName: '', studentPhone: '6304269458' },
  { rollNumber: '23WJ5A0414', name: 'MAHADEVUNI NAVYA', parentPhone: '9948128561', parentName: '', studentPhone: '9704484691' },
  { rollNumber: '23WJ5A0415', name: 'MD SALMAN', parentPhone: '8106150473', parentName: 'MD Khaja', studentPhone: '9652047325' },
  { rollNumber: '21WJ1A04K1', name: 'M. ADNAN', parentPhone: '9642337786', parentName: 'Nayeem hussain', studentPhone: '8008065856' },
];

let messageLogs = [];

// Simulated server-side database
const localStorageDatabase = {
  saveMessage: function (log) {
    let messages = JSON.parse(localStorage.getItem('messageLogs')) || [];
    messages.push(log);
    this.cleanupOldMessages(messages);
    localStorage.setItem('messageLogs', JSON.stringify(messages));
  },
  getAllMessages: function () {
    return JSON.parse(localStorage.getItem('messageLogs')) || [];
  },
  cleanupOldMessages: function (messages) {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const filteredMessages = messages.filter(log => new Date(log.timestamp) > oneMonthAgo);
    localStorage.setItem('messageLogs', JSON.stringify(filteredMessages));
  },
  clearAllLogs: function () {
    localStorage.removeItem('messageLogs');
  }
};
// Fetch messages from the server when the page loads
document.addEventListener('DOMContentLoaded', function () {
  fetchMessagesFromServer();
  periodicCleanup();
  setupToggleButtons();
});

function toggleMessageForm() {
  const messageForm = document.getElementById('messageForm');
  if (messageForm.style.display === 'none') {
    messageForm.style.display = 'block';
    messageForm.classList.add('fade-in');
  } else {
    messageForm.style.display = 'none';
  }
}

function toggleBulkMessageForm() {
  const bulkMessageForm = document.getElementById('bulkMessageForm');
  if (bulkMessageForm.style.display === 'none') {
    bulkMessageForm.style.display = 'block';
    bulkMessageForm.classList.add('fade-in');
    document.getElementById('bulkMessageContent').value = ''; // Clear previous message
  } else {
    bulkMessageForm.style.display = 'none';
  }
}

function toggleCRProfiles() {
  const crProfiles = document.getElementById('crProfiles');
  if (crProfiles.style.display === 'none') {
    showCRProfiles();
    crProfiles.style.display = 'block';
    crProfiles.classList.add('fade-in');
  } else {
    crProfiles.style.display = 'none';
  }
}


function fetchMessagesFromServer() {
  messageLogs = localStorageDatabase.getAllMessages();
  updateMessageLogs();
}

// ... (keep all existing code above this point)

document.getElementById('searchBtn').addEventListener('click', function () {
  const rollNumber = document.getElementById('rollNumber').value.toUpperCase();
  const student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumber));
  const profileCard = document.getElementById('profileCard');
  const messageForm = document.getElementById('messageForm');
  const bulkMessageForm = document.getElementById('bulkMessageForm');
  const crProfiles = document.getElementById('crProfiles');

  // Hide other elements
  messageForm.style.display = 'none';
  bulkMessageForm.style.display = 'none';
  crProfiles.style.display = 'none';

  // Toggle profile card visibility
  if (profileCard.style.display === 'block') {
    profileCard.style.display = 'none';
    return; // Exit the function early if we're hiding the profile card
  }

  if (student) {
    document.getElementById('studentName').textContent = student.name;
    document.getElementById('studentRoll').textContent = student.rollNumber;
    document.getElementById('studentEmail').textContent = student.email;
    document.getElementById('parentName').textContent = student.parentName || 'Not available';
    document.getElementById('parentPhone').textContent = student.parentPhone;

    // Add student phone number to the profile card
    document.getElementById('studentPhone').textContent = student.studentPhone || 'Not available';

    profileCard.style.display = 'block';
    profileCard.classList.add('fade-in');
  } else {
    alert('Student not found. Please check the roll number and try again.');
    profileCard.style.display = 'none';
  }
});

// Function to hide all open elements
function hideAllElements() {
  const elementsToHide = [
    'profileCard', 'messageForm', 'bulkMessageForm', 'crProfiles'
  ];
  elementsToHide.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
    }
  });
}

// Add click event listeners to other buttons to hide elements
const buttonsToAddListener = [
  'messageAllBtn', 'exportLogsBtn', 'clearLogsBtn'
];

buttonsToAddListener.forEach(id => {
  const button = document.getElementById(id);
  if (button) {
    button.addEventListener('click', hideAllElements);
  }
});

// ... (keep all existing code below this point)


function callParent() {
  const parentPhone = document.getElementById('parentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('parentName').textContent || 'Not available';

  if (parentPhone) {
    const cleanedNumber = parentPhone.replace(/\D/g, '');
    const telUri = `tel:${cleanedNumber}`;
    const startTime = new Date();

    // Initiate the call
    window.location.href = telUri;

    // Use a custom dialog after a delay
    setTimeout(() => {
      const endTime = new Date();
      const duration = (endTime - startTime) / 1000; // duration in seconds

      // Create a custom dialog
      const dialog = document.createElement('div');
      dialog.innerHTML = `
                <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999;">
                    <div style="background: white; padding: 20px; border-radius: 10px; text-align: center;">
                        <h2>Was the call answered?</h2>
                        <button id="yesBtn" style="margin: 10px; padding: 10px 20px;">Yes</button>
                        <button id="noBtn" style="margin: 10px; padding: 10px 20px;">No</button>
                    </div>
                </div>
            `;
      document.body.appendChild(dialog);

      function handleResponse(wasAnswered) {
        const status = wasAnswered ? 'Answered' : 'Unanswered';
        const log = {
          sender: 'Mr.NVS Murthy',
          recipient: cleanedNumber,
          studentName: studentName,
          studentRoll: studentRoll,
          parentName: parentName,
          message: `Call ${status}`,
          timestamp: new Date().toISOString(),
          status: status,
          platform: 'Call',
          duration: `${duration.toFixed(1)} seconds`
        };
        localStorageDatabase.saveMessage(log);
        fetchMessagesFromServer();
        document.body.removeChild(dialog);
      }

      document.getElementById('yesBtn').addEventListener('click', () => handleResponse(true));
      document.getElementById('noBtn').addEventListener('click', () => handleResponse(false));
    }, 10000); // Adjust delay as needed
  } else {
    alert('Parent phone number not available.');
  }
}
function callStudent() {
  const studentPhone = document.getElementById('studentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('parentName').textContent; // Add this line

  if (studentPhone && studentPhone !== 'Not available') {
    const cleanedNumber = studentPhone.replace(/\D/g, '');
    const telUri = `tel:${cleanedNumber}`;
    const startTime = new Date();

    // Initiate the call
    window.location.href = telUri;

    // Use a custom dialog after a delay
    setTimeout(() => {
      const endTime = new Date();
      const duration = (endTime - startTime) / 1000; // duration in seconds

      // Create a custom dialog
      const dialog = document.createElement('div');
      dialog.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 9999;">
          <div style="background: white; padding: 20px; border-radius: 10px; text-align: center;">
            <h2>Was the call answered?</h2>
            <button id="yesBtn" style="margin: 10px; padding: 10px 20px;">Yes</button>
            <button id="noBtn" style="margin: 10px; padding: 10px 20px;">No</button>
          </div>
        </div>
      `;
      document.body.appendChild(dialog);

      function handleResponse(wasAnswered) {
        const status = wasAnswered ? 'Answered' : 'Unanswered';
        const log = {
          sender: 'Mr.NVS Murthy',
          recipient: cleanedNumber,
          studentName: studentName,
          studentRoll: studentRoll,
          parentName: parentName, // Add this line
          message: `Student Call ${status}`,
          timestamp: new Date().toISOString(),
          status: status,
          platform: 'Call',
          duration: `${duration.toFixed(1)} seconds`
        };
        localStorageDatabase.saveMessage(log);
        fetchMessagesFromServer();
        document.body.removeChild(dialog);
      }

      document.getElementById('yesBtn').addEventListener('click', () => handleResponse(true));
      document.getElementById('noBtn').addEventListener('click', () => handleResponse(false));
    }, 10000); // Adjust delay as needed
  } else {
    alert('Student phone number not available.');
  }
}
// function showMessageForm() {
//   const messageForm = document.getElementById('messageForm');
//   messageForm.style.display = 'block';
//   messageForm.classList.add('fade-in');
// }

function saveMessage() {
  const message = document.getElementById('messageContent').value;

  if (message.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  const log = {
    sender: 'Mr.NVS Murthy',
    recipient: document.getElementById('parentPhone').textContent,
    message: message,
    timestamp: new Date().toISOString(),
    status: 'saved'
  };

  localStorageDatabase.saveMessage(log);
  fetchMessagesFromServer();

  alert('Message saved successfully');
}

function sendMessage() {
  const parentPhone = document.getElementById('parentPhone').textContent;
  const message = document.getElementById('messageContent').value;

  if (message.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  // Open SMS app with pre-filled message for individual parent
  window.location.href = `sms:${parentPhone}?body=${encodeURIComponent(message)}`;

  const log = {
    sender: 'Mr.NVS Murthy',
    recipient: parentPhone,
    message: message,
    timestamp: new Date().toISOString(),
    status: 'sent'
  };
  serverDatabase.saveMessage(log);
  fetchMessagesFromServer();

  document.getElementById('messageContent').value = '';
  localStorageDatabase.saveMessage(log);
  fetchMessagesFromServer();
}

function showBulkMessageForm() {
  const bulkMessageForm = document.getElementById('bulkMessageForm');
  document.getElementById('bulkMessageContent').value = ''; // Clear previous message
  bulkMessageForm.style.display = 'block';
  bulkMessageForm.classList.add('fade-in');
}

function saveBulkMessage() {
  const message = document.getElementById('bulkMessageContent').value;

  if (message.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  // Save a bulk message log for each student
  students.forEach(student => {
    const log = {
      sender: 'Mr.NVS Murthy',
      recipient: student.parentPhone,
      message: message,
      timestamp: new Date().toISOString(),
      status: 'saved (bulk)'
    };
    localStorageDatabase.saveMessage(log);
  });

  fetchMessagesFromServer();
  updateMessageLogs();

  alert('Bulk message saved successfully');
}

function sendBulkMessage() {
  const message = document.getElementById('bulkMessageContent').value;

  if (message.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  // Prepare bulk SMS
  const phoneNumbers = students.map(student => student.parentPhone).join(',');

  // Open SMS app with pre-filled message for bulk sending
  window.location.href = `sms:${phoneNumbers}?body=${encodeURIComponent(message)}`;

  // Simulating sending bulk SMS and storing logs
  students.forEach(student => {
    const log = {
      sender: 'Mr.NVS Murthy',
      recipient: student.parentPhone,
      studentName: student.name,
      studentRoll: student.rollNumber,
      parentName: student.parentName || 'Not available',
      message: message,
      timestamp: new Date().toISOString(),
      status: 'sent'
    };
    localStorageDatabase.saveMessage(log);
  });
  fetchMessagesFromServer();

  document.getElementById('bulkMessageContent').value = '';
  document.getElementById('bulkMessageForm').style.display = 'none';
}

function updateMessageLogs() {
  const logsContainer = document.getElementById('messageLogs');
  logsContainer.innerHTML = '';

  // Only show the 5 most recent messages
  const recentLogs = messageLogs.slice(-1).reverse();

  recentLogs.forEach(log => {
    const logEntry = document.createElement('p');
    const timestamp = new Date(log.timestamp);
    const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    logEntry.textContent = `${formattedDate} - To: ${log.recipient} - Student: ${log.studentName || 'N/A'} (${log.studentRoll || 'N/A'}) - Parent: ${log.parentName || 'N/A'} - Status: ${log.status} - Platform: ${log.platform || 'SMS'} - Duration: ${log.duration || 'N/A'}`;
    logEntry.classList.add('fade-in');
    logsContainer.appendChild(logEntry);
  });

  // Add a message indicating there are more logs if applicable
  if (messageLogs.length > 1) {
    const moreLogsMessage = document.createElement('p');
    moreLogsMessage.textContent = `... and ${messageLogs.length - 1} more messages`;
    moreLogsMessage.style.fontStyle = 'italic';
    moreLogsMessage.style.color = '#666';
    logsContainer.appendChild(moreLogsMessage);
  }
}

function exportMessageLogs() {
  const csvContent = "data:text/csv;charset=utf-8,"
    + "Timestamp,Sender,Recipient,Student Name,Roll Number,Parent Name,Message,Status,Platform,Duration\n"
    + messageLogs.map(e => {
      const timestamp = new Date(e.timestamp);
      const formattedTimestamp = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`;
      return `${formattedTimestamp},${e.sender},${e.recipient},${e.studentName || ''},${e.studentRoll || ''},${e.parentName || 'Not available'},${e.message},${e.status},${e.platform || 'SMS'},${e.duration || 'N/A'}`;
    }).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  
  // Create a date string for the file name in day-month-year format
  const now = new Date();
  const dateString = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()}`;
  
  // Set the file name with the date
  link.setAttribute("download", `Data-Sheet (${dateString}).csv`);
  
  document.body.appendChild(link);
  link.click();
}
// Initialize message logs
fetchMessagesFromServer();
function periodicCleanup() {
  const messages = localStorageDatabase.getAllMessages();
  localStorageDatabase.cleanupOldMessages(messages);
}

// Call this function every day
setInterval(periodicCleanup, 24 * 60 * 60 * 1000);
document.addEventListener('DOMContentLoaded', function () {
  fetchMessagesFromServer();
  periodicCleanup();
});
function clearAllLogs() {
  if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
    localStorage.removeItem('messageLogs');
    messageLogs = [];
    updateMessageLogs();
    alert("All message logs have been cleared.");
  }
}
function clearAllLogs() {
  if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
    localStorageDatabase.clearAllLogs();
    messageLogs = [];
    updateMessageLogs();
    alert("All message logs have been cleared.");
  }
}
function showCRProfiles() {
  const crProfiles = document.getElementById('crProfiles');
  crProfiles.innerHTML = ''; // Clear existing profiles

  const crs = [
    { name: 'D.Akhil', rollNumber: '22WJ1A0468', email: '22WJ1A0468@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
    { name: 'J.Harshitha', rollNumber: '22WJ1A04A9', email: '22WJ1A04A9@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
  ];

  crs.forEach(cr => {
    const profileCard = document.createElement('div');
    profileCard.className = 'profile-card cr-card';
    profileCard.innerHTML = `
      <div class="cr-info">
        <h3>${cr.name}</h3>
        <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
        <p><strong>Email:</strong> ${cr.email}</p>
        <button onclick="callCR('${cr.rollNumber}')">Call</button>
        <button onclick="whatsappCR('${cr.rollNumber}')">WhatsApp</button>
      </div>

    `;
    crProfiles.appendChild(profileCard);
  });
}

function whatsappCR(rollNumber) {
  const cr = students.find(s => s.rollNumber === rollNumber);
  if (cr && cr.studentPhone) {
    let phoneNumber = cr.studentPhone.replace(/\D/g, '');
    if (phoneNumber.startsWith('91') && phoneNumber.length > 10) {
      phoneNumber = phoneNumber.slice(2);
    }
    phoneNumber = '91' + phoneNumber;
    const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  } else {
    alert('WhatsApp number not available for this CR.');
  }
}

function callCR(rollNumber) {
  const cr = students.find(s => s.rollNumber === rollNumber);
  if (cr && cr.parentPhone) {
    window.location.href = `tel:${cr.parentPhone}`;
  } else {
    alert('Phone number not available for this CR.');
  }
}

function messageCR(rollNumber) {
  const cr = students.find(s => s.rollNumber === rollNumber);
  if (cr && cr.parentPhone) {
    window.location.href = `sms:${cr.parentPhone}`;
  } else {
    alert('Phone number not available for this CR.');
  }
}
function whatsappParent() {
  toggleCustomMessageArea('parent');
}

function whatsappStudent() {
  toggleCustomMessageArea('student');
}
function toggleCustomMessageArea(recipient) {
  const customMessageArea = document.getElementById('customMessageArea');
  const sendBtn = document.getElementById('sendCustomMessageBtn');
  const customMessageContent = document.getElementById('customMessageContent');

  if (customMessageArea.style.display === 'none') {
    customMessageArea.style.display = 'block';
    sendBtn.onclick = () => sendCustomWhatsAppMessage(recipient);
    updatePlaceholder(recipient);
  } else {
    customMessageArea.style.display = 'none';
  }
}
function updatePlaceholder(recipient) {
  const customMessageContent = document.getElementById('customMessageContent');
  const studentName = document.getElementById('studentName').textContent;

  if (recipient === 'parent') {
    customMessageContent.placeholder = "Enter your message for parent";
  } else if (recipient === 'student') {
    customMessageContent.placeholder = `Enter your message for ${studentName}`;
  }
}
function sendCustomWhatsAppMessage(recipient) {
  const customMessage = document.getElementById('customMessageContent').value;
  if (customMessage.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('parentName').textContent;

  let phoneNumber;
  if (recipient === 'parent') {
    phoneNumber = document.getElementById('parentPhone').textContent;
  } else {
    const student = students.find(s => s.rollNumber === studentRoll);
    phoneNumber = student ? student.studentPhone : '';
  }

  if (!phoneNumber) {
    alert(`${recipient.charAt(0).toUpperCase() + recipient.slice(1)} WhatsApp number not available.`);
    return;
  }

  phoneNumber = phoneNumber.replace(/\D/g, '');
  if (phoneNumber.startsWith('91') && phoneNumber.length > 10) {
    phoneNumber = phoneNumber.slice(2);
  }
  phoneNumber = '91' + phoneNumber;

  const encodedMessage = encodeURIComponent(customMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');

  // Log the message
  const log = {
    sender: 'Mr.NVS Murthy',
    recipient: phoneNumber,
    studentName: studentName,
    studentRoll: studentRoll,
    parentName: parentName,
    message: customMessage,
    timestamp: new Date().toISOString(),
    status: 'sent',
    platform: 'WhatsApp'
  };
  localStorageDatabase.saveMessage(log);
  fetchMessagesFromServer();

  // Clear and hide the custom message area
  document.getElementById('customMessageContent').value = '';
  document.getElementById('customMessageArea').style.display = 'none';
}
