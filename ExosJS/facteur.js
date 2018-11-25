function Habitation(adresse){
    this.adresse = adresse;
    this.bal = {
        courriers: [],
        deposerCourrier: function(courrier) {
        	var deposerCourrier = this.nombre + this.recommandé + this.colis;
        	return deposerCourrier;

        retirerCourrier: function(){
        	var retirerCourrier = this.nombre + this.recommandé + this.colis + this.publicité;
        	return retirerCourrier;
        }
    }
}
maison1 = new Habitation("Chemin des développeurs");
maison2 = new Habitation("Route de Castelnau");

console.log(Habitation(adresse));