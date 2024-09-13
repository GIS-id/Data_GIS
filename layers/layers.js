var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Wilayah_Sungai_1 = new ol.format.GeoJSON();
var features_Wilayah_Sungai_1 = format_Wilayah_Sungai_1.readFeatures(json_Wilayah_Sungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wilayah_Sungai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilayah_Sungai_1.addFeatures(features_Wilayah_Sungai_1);
var lyr_Wilayah_Sungai_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wilayah_Sungai_1, 
                style: style_Wilayah_Sungai_1,
                interactive: true,
                title: '<img src="styles/legend/Wilayah_Sungai_1.png" /> Wilayah_Sungai'
            });
var format_CAT_2 = new ol.format.GeoJSON();
var features_CAT_2 = format_CAT_2.readFeatures(json_CAT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAT_2.addFeatures(features_CAT_2);
var lyr_CAT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAT_2, 
                style: style_CAT_2,
                interactive: true,
                title: '<img src="styles/legend/CAT_2.png" /> CAT'
            });
var format_Sumur_3 = new ol.format.GeoJSON();
var features_Sumur_3 = format_Sumur_3.readFeatures(json_Sumur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sumur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sumur_3.addFeatures(features_Sumur_3);
var lyr_Sumur_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sumur_3, 
                style: style_Sumur_3,
                interactive: true,
                title: '<img src="styles/legend/Sumur_3.png" /> Sumur'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Wilayah_Sungai_1.setVisible(true);lyr_CAT_2.setVisible(true);lyr_Sumur_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Wilayah_Sungai_1,lyr_CAT_2,lyr_Sumur_3];
lyr_Wilayah_Sungai_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CAT_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sumur_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Wilayah_Sungai_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CAT_2.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sumur_3.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_Wilayah_Sungai_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_CAT_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sumur_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_Sumur_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});