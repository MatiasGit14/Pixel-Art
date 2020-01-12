var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
var pixeles = [];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var colorSeleccionado = document.getElementById("indicador-de-color");
var $paleta = $("#paleta");
var $grillaPixeles = $("#grilla-pixeles");

colorPersonalizado.addEventListener('change',
    (function() {
        // Se guarda el color de la rueda en colorActual
        colorActual = colorPersonalizado.value;
        // Completar para que cambie el indicador-de-color al colorActual
        colorSeleccionado.style.backgroundColor = colorActual;

    })
);


// Funcion para generar la paleta de colores
function paletaColores() {

    for (var i = 0; i < nombreColores.length; i++) {
        var div = document.createElement("div");
        div.className = "color-paleta";
        div.style.backgroundColor = nombreColores[i];
        paleta.appendChild(div);

    }
}
paletaColores();

// Funciones para crear grilla 
function arrayPixeles(array) {
    i = 0;
    while (i < 1750) {
        array.push(i + 1);
        i++;
    }
}
arrayPixeles(pixeles);

function grilla() {
    for (var i = 1; i < pixeles.length; i++) {
        var divPx = document.createElement("div");
        divPx.className = "pixel";
        grillaPixeles.appendChild(divPx);
    }
}
grilla(pixeles);

// Indicador de color del color Seleccionado
$(document).ready(function() {
    $paleta.children().click(function() {

        var color = $(this).css("background-color");
        $("#indicador-de-color").css("background-color", color);
        // Para pintar en movimiento con el color de la paleta de colores
        $grillaPixeles.children().mouseover(function() {
            if (cliqueado) {
                $(this).css("background-color", color);

            }
        });
        // Para pintar con un click con la paleta de colores
        $grillaPixeles.children().click(function() {

            $(this).css("background-color", color);

        });
    });
    //Para pintar con el color personalizado en movimiento
    $("#color-personalizado").click(function() {
        $grillaPixeles.children().mouseover(function() {
            if (cliqueado) {
                $(this).css("background-color", colorPersonalizado.value);
            }
        });
        //Para pintar con el color personalizado en un click
        $grillaPixeles.children().click(function() {
            $(this).css("background-color", colorPersonalizado.value);
        });
    });

    // Funcion de borrar toda la grilla

    $("#borrar").click(function() {
        $grillaPixeles.children().animate({ "background-color": "white" }, 1200)
    });

    // Seleccion de imagenes  superheroes.
    $("#batman").click(function() {
        cargarSuperheroe(batman);
    });
    $("#invisible").click(function() {
        cargarSuperheroe(invisible);
    });
    $("#flash").click(function() {
        cargarSuperheroe(flash);
    });
    $("#wonder").click(function() {
        cargarSuperheroe(wonder);
    });

    // Descargar dibujo
    $("#guardar").click(function() {
        guardarPixelArt();
    });

    // VARIABLE PARA DETECTAR EL CLICK
    cliqueado = false;

    $grillaPixeles.children().mousedown(function() {
        cliqueado = true;
    });
    $grillaPixeles.children().mouseup(function() {
        cliqueado = false;
    });


});