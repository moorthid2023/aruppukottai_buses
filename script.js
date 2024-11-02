const schedule = [
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "காலை 4.20" },
  { service: "அரசு", destination: "புதூர்", time: "4.45" },
  { service: "அரசு", destination: "கோவில்பட்டி", time: "5.00" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "5.15" },
  { service: "ஜெயவிலாஸ்", destination: "கோவில்பட்டி", time: "5.30" },
  { service: "அரசு", destination: "புதூர் ,தூத்துக்குடி", time: "5.45" },
  { service: "ஸ்ரீநிவாசா", destination: "விளாத்திகுளம்", time: "5.45" },
  { service: "ஜெயராம்", destination: "பந்தல்குடி, இராஜபாளையம்", time: "5.55" },
  { service: "அரசு", destination: "கோவில்பட்டி", time: "6.20" },
  { service: "அரசு", destination: "புதூர்", time: "6.25" },
  { service: "ஸ்ரீராம்", destination: "மாதலாபுரம்", time: "6.42" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "6.50" },
  { service: "அரசு", destination: "பெரியதும்மகுண்டு", time: "7.05" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "7.10" },
  { service: "S.S.K.", destination: "கோவில்பட்டி", time: "7.20" },
  { service: "அரசு", destination: "நாகலாபுரம்", time: "7.30" },
  { service: "அரசு", destination: "திருநெல்வேலி", time: "7.30" },
  { service: "அரசு", destination: "கொப்புசித்தம்பட்டி", time: "7.45" },
  { service: "ஸ்ரீநிவாசா", destination: "புதூர், தூத்துக்குடி", time: "8.00" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "8.20" },
  { service: "ஜெயவிலாஸ்", destination: "கோவில்பட்டி", time: "8.25" },
  { service: "பிரதீப்", destination: "பந்தல்குடி", time: "8.43" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "8.50" },
  { service: "அரசு", destination: "பெரியதும்மகுண்டு", time: "9.02" },
  { service: "ஜெயவிலாஸ்", destination: "புதூர். தூத்துக்குடி", time: "9.05" },
  { service: "அரசு", destination: "பட்டிதேவன்பட்டி", time: "9.15" },
  { service: "ஜெயவிலாஸ்", destination: "கோவில்பட்டி", time: "9.20" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "9.21" },
  { service: "ஸ்ரீராம்", destination: "விளாத்திகுளம்", time: "9.30" },
  { service: "அரசு", destination: "நாகலாபுரம்", time: "10.15" },
  { service: "அரசு", destination: "கோவில்பட்டி", time: "10.20" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "10.40" },
  { service: "அரசு", destination: "புதூர்", time: "10.45" },
  { service: "ராஜவேல்", destination: "புதூர். தூத்துக்குடி", time: "10.53" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "11.05" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "11.20" },
  { service: "ஜெயவிலாஸ்", destination: "கோவில்பட்டி", time: "11.20" },
  { service: "அரசு", destination: "புதூர்", time: "11.25" },
  { service: "ஜெயவிலாஸ்", destination: "நாகலாபுரம்", time: "11.45" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "மதியம் 12.00" },
  { service: "ஜெயவிலாஸ்", destination: "எட்டையபுரம்", time: "12.05" },
  {
    service: "மீனாம்பிகை",
    destination: "பந்தல்குடி,இளையான்குடி",
    time: "12.16",
  },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "12.20" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "12.35" },
  { service: "பிரதீப்", destination: "நாகலாபுரம்", time: "12.37" },
  { service: "அரசு", destination: "நாகலாபுரம்", time: "12.50" },
  { service: "ராஜவேல்", destination: "விளாத்திகுளம்", time: "12.57" },
  { service: "ஸ்ரீராம்", destination: "மாதலாபுரம்", time: "1.00" },
  { service: "அரசு", destination: "கோவில்பட்டி", time: "1.00" },
  { service: "அரசு", destination: "திருநெல்வேலி", time: "1.15" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "1.20" },
  { service: "ஜெயராம்", destination: "பந்தல்குடி, ராஜபாளையம்", time: "1.20" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "1.40" },
  { service: "அரசு", destination: "புதூர்", time: "1.45" },
  { service: "அரசு", destination: "பெரியதும்மக்குண்டு", time: "2.00" },
  { service: "அரசு", destination: "விளாத்திகுளம்", time: "2.05" },
  { service: "ஜெயவிலாஸ்", destination: "கோவில்பட்டி", time: "2.10" },
];

const busTableBody = document.querySelector(".busTableBody");
function displayTable() {
  schedule.forEach((entry) => {
    // Create a new table row for each entry
    const row = document.createElement("tr");

    // Create cells for each piece of data (service, destination, time)
    const serviceCell = document.createElement("td");
    serviceCell.textContent = entry.service;

    const destinationCell = document.createElement("td");
    destinationCell.textContent = entry.destination;

    const timeCell = document.createElement("td");
    timeCell.textContent = entry.time;

    // Append cells to the row
    row.appendChild(serviceCell);
    row.appendChild(destinationCell);
    row.appendChild(timeCell);

    // Append the row to the table body
    busTableBody.appendChild(row);
  });
}

displayTable();
