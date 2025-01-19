function fetchData(file) {
    return new Promise((resolve, reject) => {
      console.log(`Fetching data from ${file}...`); 
      const Data = { success: true,  };//{ id: 1, name: "Omkar" }
      resolve(Data); 
    });
}
  
function processData(Data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Data.success) {
          console.log("Processing data...");
          resolve({ ...Data.data, status: "processed" });
        } else {
          reject("Error: Failed to process data");
        }
      }, 1500); 
    });
}
  
function manageAllPromises() {
    console.log("Starting promises using .all...");
  
    const fetchPromise = fetchData('file.txt'); 
    const processPromise = fetchPromise.then((Data) => processData(Data));
  
    Promise.all([fetchPromise, processPromise])
      .then((results) => {
        console.log("All promises completed:");
        console.log(results);
      })
      .catch((error) => {
        console.log("Error with Promise.all:", error);
      });
}
  
manageAllPromises();
  