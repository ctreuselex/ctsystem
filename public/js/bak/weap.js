function getWeapIndex(id) {
    for (var i=0; i<charWeapons.length; i++) if (charWeapons[i]['id'] == id) return i;
}