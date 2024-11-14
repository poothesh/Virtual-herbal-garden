document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('searchbtn');
    const searchResultsDiv = document.getElementById('search-results');
    let searchResults = [];
  
    const plants = [
      { name: 'Ginger', url: 'ginger.html' },
      { name: 'Aloe Vera', url: 'aloevera.html' },
      { name: 'Neem', url: 'neem.html' },
      { name: 'ayurveda', url: 'ayurveda.html' },
      { name: 'aswagandha', url: 'aswagandha.html' },
      // Add more plant names and URLs here as needed
    ];
  
    // Function to show the search results
    function showSearchResults(results) {
      searchResultsDiv.innerHTML = '';
      searchResultsDiv.style.display = 'block';
  
      if (results.length > 0) {
        results.forEach(result => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('search-result-item');
          itemDiv.textContent = result.name;
          itemDiv.addEventListener('click', () => {
            window.location.href = result.url;
            clearSearch();
          });
          searchResultsDiv.appendChild(itemDiv);
        });
      } else {
        const notFoundDiv = document.createElement('div');
        notFoundDiv.classList.add('not-found');
        notFoundDiv.textContent = 'Searched Item Not Found';
        searchResultsDiv.appendChild(notFoundDiv);
      }
    }
  
    // Function to clear search input and results
    function clearSearch() {
      searchInput.value = '';
      searchResultsDiv.innerHTML = '';
      searchResultsDiv.style.display = 'none';
    }
  
    // Function to handle search logic
    function handleSearch(query) {
      query = query.toLowerCase();
      if (query.includes('ginger')) {
        searchResults = [{ name: 'Ginger', url: 'ginger.html' }];
      } else if (query.includes('plant')) {
        searchResults = [
          { name: 'Ginger', url: 'ginger.html' },
          { name: 'Aloe Vera', url: 'aloevera.html' }
        ];
      } else {
        searchResults = [];
      }
  
      showSearchResults(searchResults);
    }
  
    // Handle search on clicking the search button
    searchButton.addEventListener('click', () => {
      const query = searchInput.value;
      handleSearch(query);
    });
  
    // Handle search on pressing "Enter" key
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const query = searchInput.value;
        handleSearch(query);
      }
    });
  
    // Real-time search while typing
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value;
      handleSearch(query);
    });
  
    // Hide the floating search results if clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.search')) {
        searchResultsDiv.style.display = 'none';
      }
    });
  });
  

  //Popup display
  document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("popupModal");
    const closeBtn = document.querySelector(".close-btn");
  
    // Show modal on page load
    modal.style.display = "block";
  
    // Close modal when 'x' is clicked
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    // Hide modal when clicking outside of the content
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });






  //content will view


  // Define items for each category
const itemsByBenefit = {
  "anti-inflammatory": [
    {
      name: "Rosemary",
      botanicalName: "Lavandula angustifolia",
      imgSrc: "images/rosemary.png",
      link: "rosemary.html"
    },
    {
      name: "Turmeric",
      botanicalName: "Curcuma longa",
      imgSrc: "images/turmeric.png",
      link: "turmeric.html"
    },
    {
      name: "Bay Leaves",
      botanicalName: "Laurus nobilis",
      imgSrc: "images/bay.png",
      link: "bay.html"
    },
    {
      name: "Moringa Leaves",
      botanicalName: "Moringa oleifera",
      imgSrc: "images/moringa.png",
      link: "moringa.html"
    }
  ],
  "antioxidant": [
    {
      name: "Curry Leaves",
      botanicalName: "Murraya koenigii",
      imgSrc: "images/curry.png",
      link: "curry.html"
    },
    {
      name: "Mint Leaves",
      botanicalName: "Mentha",
      imgSrc: "images/mint.png",
      link: "mint.html"
    },
    {
      name: "Green Tea Leaves",
      botanicalName: "Camellia sinensis",
      imgSrc: "images/grren tea.png",
      link: "green.html"
    },
    {
      name: "Guava Leaves",
      botanicalName: "Psidium guajava",
      imgSrc: "images/guva.png",
      link: "guava.html"
    },
    {
      name: "Spinach Leaves",
      botanicalName: "Spinacia oleracea",
      imgSrc: "images/spinach.png",
      link: "spinach.html"
    }
  ],
  "digestive": [
    {
      name: "Betel Leaves",
      botanicalName: "Piper betle",
      imgSrc: "images/betel.png",
      link: "betel.html"
    },
    {
      name: "Ajwain",
      botanicalName: "Trachyspermum ammi",
      imgSrc: "images/ajwain.png",
      link: "ajwain.html"
    },
    {
      name: "Coriander",
      botanicalName: "Coriandrum sativum",
      imgSrc: "images/corinder.png",
      link: "coriander.html"
    },
    {
      name: "Peppermint",
      botanicalName: "Mentha × piperita",
      imgSrc: "images/peper.png",
      link: "peppermint.html"
    },
  ],
  "immune-support": [
    {
      name: "Echinacea",
      botanicalName: "Echinacea purpurea",
      imgSrc: "images/echinaca.png",
      link: "echinacea.html"
    },
    {
      name: "Ginseng",
      botanicalName: "Panax ginseng",
      imgSrc: "images/ginseng.png",
      link: "ginseng.html"
    },
    {
      name: "Ashwagandha",
      botanicalName: "Withania somnifera",
      imgSrc: "images/ashwagandha.png",
      link: "ashwagandha.html"
    },
    {
      name: "Neem",
      botanicalName: "Azadirachta indica",
      imgSrc: "images/neem.png",
      link: "neem.html"
    }
  ]
  // Add more categories if needed
};

const commonPlants = [
  {
    name: "Tulsi(Holy Basil)",
    botanicalName: "Ocimum sanctum",
    imgSrc: "images/tulsi.png",
    link: "tulsi.html"
  },
  {
    name: "Ashwagandha",
    botanicalName: "Withania somnifera",
    imgSrc: "images/ashwagandha.png",
    link: "aswagandha.html"
  },
  {
    name: "Aloevera",
    botanicalName: "Aloe barbadensis miller",
    imgSrc: "images/aloevera.png",
    link: "aloevera.html"
  },
  {
    name: "Ginger",
    botanicalName: "Zingiber officinale",
    imgSrc: "images/ginger.png",
    link: "ginger.html"
  },
  {
    name: "Neem",
    botanicalName: "Lavandula angustifolia",
    imgSrc: "images/neem.png",
    link: "neem.html"
  }
];


const itemsByRegion = {
  "tamil-nadu": [
    {
      name: "Jungle Jalebi",
      botanicalName: "Pithecellobium dulce",
      imgSrc: "images/jungle  jalabi.png",
      link: "jungle-jalebi.html"
    },
    {
      name: "Indian Pennywort",
      botanicalName: "Centella Asiatica",
      imgSrc: "images/penny wort.png",
      link: "indian-pennywort.html"
    },
    {
      name: "Bael",
      botanicalName: "Aegle marmelos",
      imgSrc: "images/bael.png",
      link: "bael.html"
    },
    {
      name: "Chiretta",
      botanicalName: "Swertia chirata",
      imgSrc: "images/chiretta.png",
      link: "chiretta.html"
    },
    {
      name: "Curry",
      botanicalName: "Murraya koenigii",
      imgSrc: "images/curry.png",
      link: "curry.html"
    }    
  ],
  "kerala": [
    {
      name: "Sarsaparilla",
      botanicalName: "Smilax glabra",
      imgSrc: "images/sarpagandha.png",
      link: "sarsaparilla.html"
    },
    {
      name: "Kacholam",
      botanicalName: "Kaempferia galanga",
      imgSrc: "images/kacholam.png",
      link: "kacholam.html"
    },
    {
      name: "Brahmi",
      botanicalName: "Bacopa monnieri",
      imgSrc: "images/brahmi.png",
      link: "brahmi.html"
    },
    {
      name: "Jackfruit",
      botanicalName: "Artocarpus heterophyllus",
      imgSrc: "images/jack fruit.png",
      link: "jackfruit.html"
    }
    
  ],
  "karnataka": [
    {
      name: "Chilli",
      botanicalName: "Capsicum annuum",
      imgSrc: "images/chilli.png",
      link: "chilli.html"
    },
    {
      name: "Kadamba",
      botanicalName: "Neolamarckia cadamba",
      imgSrc: "images/kadamba.png",
      link: "kadamba.html"
    },
    {
      name: "Vallarai",
      botanicalName: "Centella Asiatica",
      imgSrc: "images/vallarai.png",
      link: "vallarai.html"
    }    
  ],
  "andra-pradesh": [
    {
      name: "Tulsi (Holy Basil)",
      botanicalName: "Ocimum sanctum",
      imgSrc: "images/tulsi.png",
      link: "tulsi.html"
    },
    {
      name: "Papaya",
      botanicalName: "Carica papaya",
      imgSrc: "images/papaya.png",
      link: "papaya.html"
    },
    {
      name: "Cinnamon",
      botanicalName: "Cinnamomum verum",
      imgSrc: "images/cinnamon.png",
      link: "cinnamon.html"
    },
    {
      name: "Sarpagandha",
      botanicalName: "Rauvolfia serpentina",
      imgSrc: "images/sarpagandha.png",
      link: "sarpagandha.html"
    }
    
    
    
  ]
};

const itemsByType = {
  "herb": [
    {
      name: "Mint Leaves",
      botanicalName: "Mentha",
      imgSrc: "images/mint.png",
      link: "mint.html"
    },
    {
      name: "Tulsi (Holy Basil)",
      botanicalName: "Ocimum sanctum",
      imgSrc: "images/tulsi.png",
      link: "tulsi.html"
    },
    {
      name: "Ashwagandha",
      botanicalName: "Withania somnifera",
      imgSrc: "images/ashwagandha.png",
      link: "ashwagandha.html"
    },
    {
      name: "Tulsi",
      botanicalName: "Ocimum sanctum",
      imgSrc: "images/tulsi.png",
      link: "tulsi.html"
    },
    {
      name: "Moringa",
      botanicalName: "Moringa oleifera",
      imgSrc: "images/moringa.png",
      link: "moringa.html"
    },
    {
      name: "Brahmi",
      botanicalName: "Bacopa monnieri",
      imgSrc: "images/brahmi.png",
      link: "brahmi.html"
    },
    {
      name: "Sarpagandha",
      botanicalName: "Rauvolfia serpentina",
      imgSrc: "images/sarpagandha.png",
      link: "sarpagandha.html"
    },
    {
      name: "Kesar",
      botanicalName: "Crocus sativus",
      imgSrc: "images/kesar.png",
      link: "kesar.html"
    },
    {
      name: "Fenugreek",
      botanicalName: "Trigonella foenum-graecum",
      imgSrc: "images/fenugreek.png",
      link: "fenugreek.html"
    },
    {
      name: "Cardamom",
      botanicalName: "Elettaria cardamomum",
      imgSrc: "images/cardamom.png",
      link: "cardamom.html"
    },
    {
      name: "Ginger",
      botanicalName: "Zingiber officinale",
      imgSrc: "images/ginger.png",
      link: "ginger.html"
    },
    {
      name: "Aloe Vera",
      botanicalName: "Aloe barbadensis miller",
      imgSrc: "images/aloevera.png",
      link: "aloevera.html"
    }
    
  ],
  "shrub": [
    {
      name: "Hibiscus",
      botanicalName: "Hibiscus rosa-sinensis",
      imgSrc: "images/hibiscus.png",
      link: "hibiscus.html"
    },
    {
      name: "Karuka",
      botanicalName: "Sida cordifolia",
      imgSrc: "images/kacholam.png",
      link: "karuka.html"
    },
    {
      name: "Bitter",
      botanicalName: "Citrus aurantiifolia",
      imgSrc: "images/bitter.png",
      link: "bitter.html"
    },
    {
      name: "Neelakurinji",
      botanicalName: "Strobilanthes kunthiana",
      imgSrc: "images/neela kunjiii.jpg",
      link: "neelakurinji.html"
    }
    
  ],
  "tree": [
    {
      name: "Tamarind",
      botanicalName: "Tamarindus indica",
      imgSrc: "images/tamarind.png",
      link: "tamarind.html"
    },
    {
      name: "Fig",
      botanicalName: "Ficus carica",
      imgSrc: "images/fig.png",
      link: "fig.html"
    },
    {
      name: "Amla",
      botanicalName: "Phyllanthus emblica",
      imgSrc: "images/amla.png",
      link: "amla.html"
    },
    {
      name: "Peepal",
      botanicalName: "Ficus religiosa",
      imgSrc: "images/peepal.png",
      link: "peepal.html"
    }
    
  ],
  "vine": [
    {
      name: "Money Plant",
      botanicalName: "Epipremnum aureum",
      imgSrc: "images/mani plant.png",
      link: "money-plant.html"
    },
    {
      name: "Jasmine",
      botanicalName: "Jasminum officinale",
      imgSrc: "images/jasmine.png",
      link: "jasmine.html"
    },
    {
      name: "Ivy",
      botanicalName: "Hedera helix",
      imgSrc: "images/lvy.png",
      link: "ivy.html"
    },
    {
      name: "Hops",
      botanicalName: "Humulus lupulus",
      imgSrc: "images/hops.png",
      link: "hops.html"
    },
    {
      name: "Tinospora",
      botanicalName: "Tinospora cordifolia",
      imgSrc: "images/tinospora.png",
      link: "tinospora.html"
    }
    
  ]
};


function updateItemsByRegion(selectedRegion) {
  const itemContainer = document.getElementById("item-container");
  itemContainer.innerHTML = "";  // Clear previous content

  if (selectedRegion) {
    const heading = document.createElement("h3");
    heading.style.textAlign = "center";
    heading.style.margin = "16px";
    heading.style.fontWeight = "600";
    heading.textContent = selectedRegion.replace("-", " ").toUpperCase();
    itemContainer.appendChild(heading);
  }

  const items = itemsByRegion[selectedRegion] || [];

  items.forEach((item) => {
    const itemElement = document.createElement("a");
    itemElement.href = item.link;
    itemElement.classList.add("item");

    itemElement.innerHTML = `
      <div class="item-image">
        <img src="${item.imgSrc}" alt="${item.name}" />
      </div>
      <div class="item-name">${item.name}</div>
      <div class="item-botanical-name">${item.botanicalName}</div>
    `;

    itemContainer.appendChild(itemElement);
  });
}

function updateItemsByType(selectedType) {
  const itemContainer = document.getElementById("item-container");
  itemContainer.innerHTML = "";  // Clear previous content

  if (selectedType) {
    const heading = document.createElement("h3");
    heading.style.textAlign = "center";
    heading.style.margin = "16px";
    heading.style.fontWeight = "600";
    heading.textContent = selectedType.charAt(0).toUpperCase() + selectedType.slice(1);
    itemContainer.appendChild(heading);
  }

  const items = itemsByType[selectedType] || [];

  items.forEach((item) => {
    const itemElement = document.createElement("a");
    itemElement.href = item.link;
    itemElement.classList.add("item");

    itemElement.innerHTML = `
      <div class="item-image">
        <img src="${item.imgSrc}" alt="${item.name}" />
      </div>
      <div class="item-name">${item.name}</div>
      <div class="item-botanical-name">${item.botanicalName}</div>
    `;

    itemContainer.appendChild(itemElement);
  });
}

// Update common plants or items based on region/type selection
document.getElementById("region").addEventListener("change", (event) => {
  const selectedRegion = event.target.value.toLowerCase();
  updateItemsByRegion(selectedRegion);  // Call function for region selection
});

document.getElementById("type").addEventListener("change", (event) => {
  const selectedType = event.target.value.toLowerCase();
  updateItemsByType(selectedType);  // Call function for type selection
});

// Function to update items based on selected medicinal use
function updateItems(selectedBenefit) {
  const itemContainer = document.getElementById("item-container");
  itemContainer.innerHTML = "";  // Clear the container before adding new items

  // If there is a valid selection, display the heading
  if (selectedBenefit) {
    const heading = document.createElement("h3");
    heading.style.textAlign = "center";
    heading.style.margin = "16px";
    heading.style.fontWeight = "600";
    heading.textContent = selectedBenefit.charAt(0).toUpperCase() + selectedBenefit.slice(1);
    itemContainer.appendChild(heading);
  }

  // Get items for the selected benefit
  const items = itemsByBenefit[selectedBenefit] || [];

  // Create and add items to the container
  items.forEach((item) => {
    const itemElement = document.createElement("a");
    itemElement.href = item.link;
    itemElement.classList.add("item");

    itemElement.innerHTML = `
      <div class="item-image">
        <img src="${item.imgSrc}" alt="${item.name}" />
      </div>
      <div class="item-name">${item.name}</div>
      <div class="item-botanical-name">${item.botanicalName}</div>
    `;

    itemContainer.appendChild(itemElement);
  });
}

// Function to update commonly used plants based on filters
function updateCommonPlants() {
  const commonPlantsContainer = document.getElementById("common-plants-container");
  commonPlantsContainer.innerHTML = "";  // Clear the container before adding new items

  // Add all the common plants to the container
  commonPlants.forEach((plant) => {
    const plantElement = document.createElement("a");
    plantElement.href = plant.link;
    plantElement.classList.add("item");

    plantElement.innerHTML = `
      <div class="item-image">
        <img src="${plant.imgSrc}" alt="${plant.name}" />
      </div>
      <div class="item-name">${plant.name}</div>
      <div class="item-botanical-name">${plant.botanicalName}</div>
    `;

    commonPlantsContainer.appendChild(plantElement);
  });
}

// Listen for changes in the dropdown selections
document.getElementById("medicinal-uses").addEventListener("change", (event) => {
  const selectedBenefit = event.target.value;
  updateItems(selectedBenefit);  // Update items based on the medicinal use selected
});

document.getElementById("region").addEventListener("change", () => {
  updateCommonPlants();  // Update common plants based on region/type selection if needed
});

document.getElementById("type").addEventListener("change", () => {
  updateCommonPlants();  // Update common plants based on region/type selection if needed
});

// Initial load
updateCommonPlants();  // Show the common plants initially