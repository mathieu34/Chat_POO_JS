var  produit = {
	init: function (nom, prixHT, prixTTC) {
	this.nom = nom ;
	this.totalHT = totalHT ;
	this.totalTTC = prixTTC ; 
	this.prix = {
	prix: function(nombretotal) {
		var PrixTotal = this.nombre * this.totalTTC;
        	return AjoutArticle;
		}
	}
	}
}
function panier {
	init: function (nombres_baguettes, nombre_croissants) {
	this.ajoute = {
	AjoutArticle: function(article) {
        	var AjoutArticle = this.nombre + this.TypeArticle;
        	return AjoutArticle;
	}
	this.retire = {
	RetireArticle: function(article) {
        	var RetireArticle = this.nombre + this.TypeArticle;
        	return RetireArticle;
	}
	}
}

var baguette = new Produit( 'Baguette', 0.85, 1,02); 
var croissant = new Produit( 'Croissant', 0.80, 0,96);
var panier = new Panier(3, 2);
var retire = new Panier;

console.log(panier.totalHT);
console.log(panier.totalTTC);  

