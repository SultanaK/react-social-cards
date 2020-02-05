function emphasize(string) {
    if (string.length < 1) {
        return false;
    }
    return string.toUpperCase() + "!";
}

  
  export default emphasize;