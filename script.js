// ========================  Navber ========================== //

(function () {
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
})();
 
// ========================  Properties SECTION Card Data ========================== //

const properties = [
  {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: "$2.5 Cr", per: "$13,500/sq.ft",
    title: "Luxury 3BHK Apartment",
    location: "Bandra West, Mumbai",
    beds: 3, baths: 2, area: "1850 sq.ft",
    parking: "2 Parking",
    furnish: "Semi Furnished",
    age: "3 Years Old",
    balcony: "2 Balcony",
    status: "For Sale",
    agentName: "Rahul Sharma",
    agentImage: "https://randomuser.me/api/portraits/men/32.jpg",
    icon: '<i class="fa-regular fa-heart"></i>'
  },
  {
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: "$3.8 Cr", per: "$15,200/sq.ft",
    title: "Sea View 4BHK",
    location: "Juhu, Mumbai",
    beds: 4, baths: 3, area: "2400 sq.ft",
    parking: "2 Parking",
    furnish: "Fully Furnished",
    age: "1 Year Old",
    balcony: "3 Balcony",
    status: "Featured",
    agentName: "Amit Verma",
    agentImage: "https://randomuser.me/api/portraits/men/10.jpg",
    icon: '<i class="fa fa-heart"></i>'
  },
  {
    image:  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    price: "$95 Lakh", per: "$8,500/sq.ft",
    title: "Premium 2BHK Flat",
    location: "Whitefield, Bangalore",
    beds: 2, baths: 2, area: "1250 sq.ft",
    parking: "1 Parking",
    furnish: "Unfurnished",
    age: "2 Years Old",
    balcony: "1 Balcony",
    status: "Ready to Move",
    agentName: "Rohit Singh",
    agentImage: "https://randomuser.me/api/portraits/men/20.jpg",
    icon: '<i class="fa-regular fa-heart"></i>'
  },
  {
    image:  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    price: "$1.8 Cr", per: "$10,200/sq.ft",
    title: "Modern 3BHK",
    location: "Gurgaon Sector 57",
    beds: 3, baths: 3, area: "1750 sq.ft",
    parking: "2 Parking",
    furnish: "Semi Furnished",
    age: "New Project",
    balcony: "2 Balcony",
    status: "For Sale",
    agentName: "Karan Malhotra",
    agentImage: "https://randomuser.me/api/portraits/men/47.jpg",
    icon: '<i class="fa fa-heart"></i>'
  },
  {
    image:  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
    price: "$4.2 Cr", per: "$17,000/sq.ft",
    title: "Luxury Villa",
    location: "Alibaug, Maharashtra",
    beds: 5, baths: 4, area: "4200 sq.ft",
    parking: "3 Parking",
    furnish: "Fully Furnished",
    age: "1 Year Old",
    balcony: "4 Balcony",
    status: "Featured",
    agentName: "Anil Reddy",
    agentImage: "https://randomuser.me/api/portraits/men/61.jpg",
    icon: '<i class="fa-regular fa-heart"></i>'
  },
  {
    image:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    price: "$75 Lakh", per: "$7,200/sq.ft",
    title: "Affordable 2BHK",
    location: "Noida Sector 78",
    beds: 2, baths: 2, area: "1100 sq.ft",
    parking: "1 Parking",
    furnish: "Semi Furnished",
    age: "5 Years Old",
    balcony: "1 Balcony",
    status: "For Sale",
    agentName: "Siddharth Kapoor",
    agentImage: "https://randomuser.me/api/portraits/men/55.jpg",
    icon: '<i class="fa fa-heart"></i>'
  }
];

const row = document.getElementById('propertyRow');

properties.forEach(p => {
  
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6';
  
  
  col.innerHTML = `
    <div class="card">
      <div class="card-img">
       <img src="${p.image}" alt="Property">
        <div class="badge">${p.status}</div>
        <div class="wishlist">${p.icon}</div>
      </div>
      <div class="card-body">
        <div class="price">${p.price} <span>${p.per}</span></div>
        <div class="title">${p.title}</div>
        <div class="location"><i class="fa fa-location-dot"></i> ${p.location}</div>
        <div class="main-features">
          <div><i class="fa fa-bed"></i> ${p.beds} Beds</div>
          <div><i class="fa fa-bath"></i> ${p.baths} Baths</div>
          <div><i class="fa fa-expand"></i> ${p.area}</div>
        </div>
        <div class="extra-details">
          <div><i class="fa fa-car"></i> ${p.parking}</div>
          <div><i class="fa fa-couch"></i> ${p.furnish}</div>
          <div><i class="fa fa-calendar"></i> ${p.age}</div>
          <div><i class="fa fa-building"></i> ${p.balcony}</div>
        </div>
        <div class="agent">
          <div class="agent-info">
            <img src="${p.agentImage}" alt="${p.agentName}">
            <span>${p.agentName}</span>
          </div>
          <button class="btn">View Details</button>
        </div>
      </div>
    </div>
  `;
  
  row.appendChild(col);
});

  // <!-----------------------  toggle ------------------------->

document.addEventListener("click", function(e) {
  if (e.target.closest(".wishlist")) {
    e.target.closest(".wishlist").classList.toggle("active");
  }
});

  // <!----------------------- Modal ------------------------->

const authModal = document.getElementById('authModal');
const authOverlay = document.getElementById('authOverlay');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

const openLoginBtns = document.querySelectorAll('#openLogin, #openLogin2');
const openSignupBtns = document.querySelectorAll('#openSignup, #openSignup2');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const closeModal = document.getElementById('closeModal');

function showModal(form) {
    
    authModal.classList.remove('d-none');
    authOverlay.classList.remove('d-none');

    void authOverlay.offsetWidth; 
    authModal.classList.add('active');
    authOverlay.classList.add('active');

    if (form === 'login') {
        loginForm.classList.remove('d-none');
        signupForm.classList.add('d-none');
    } else {
        signupForm.classList.remove('d-none');
        loginForm.classList.add('d-none');
    }
}

function hideModal() {
    authModal.classList.remove('active');
    authOverlay.classList.remove('active');

    setTimeout(() => {
        authModal.classList.add('d-none');
        authOverlay.classList.add('d-none');
    }, 300);
}

openLoginBtns.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); showModal('login'); }));
openSignupBtns.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); showModal('signup'); }));
switchToSignup.addEventListener('click', (e) => { e.preventDefault(); showModal('signup'); });
switchToLogin.addEventListener('click', (e) => { e.preventDefault(); showModal('login'); });
closeModal.addEventListener('click', hideModal);
authOverlay.addEventListener('click', hideModal);