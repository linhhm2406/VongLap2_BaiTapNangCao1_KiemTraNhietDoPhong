let input_temp = parseInt(prompt('Nhap vao nhiet do phong hien tai :'));

if (input_temp > 100){
    alert('Vui long giam nhiet do');
}else if (input_temp<20){
    alert('Vui long tang nhiet do');
}else {
    alert('Nhiet do phong hien tai la '+input_temp);
}