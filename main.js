var images=["family.webp", "Sara.jpeg", "Soumik.jpeg", "Shreyas.jpeg"];
var all_names=["Family Book", "Sara Didolkar", "Soumik Dedolkar", "Shreyas Desai"];

var i = 0;
function update(){
    i++;
    var number_of_members = 5;
    if(i > number_of_members){
        i = 0;
    }
    var updated_images = images[i];
    var updated_names = all_names[i];
    document.getElementById("photos").src = updated_images;
    document.getElementById("name").innerHTML = updated_names
}