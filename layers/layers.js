ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-52.347441, -31.832872, -52.177738, -31.742378]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Anexo04reaAquaviria_1 = new ol.format.GeoJSON();
var features_Anexo04reaAquaviria_1 = format_Anexo04reaAquaviria_1.readFeatures(json_Anexo04reaAquaviria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Anexo04reaAquaviria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo04reaAquaviria_1.addFeatures(features_Anexo04reaAquaviria_1);
var lyr_Anexo04reaAquaviria_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo04reaAquaviria_1, 
                style: style_Anexo04reaAquaviria_1,
                popuplayertitle: 'Anexo 04 - Área Aquaviária',
                interactive: true,
                title: '<img src="styles/legend/Anexo04reaAquaviria_1.png" /> Anexo 04 - Área Aquaviária'
            });
var format_Anexo03readeExpansodoPorto_2 = new ol.format.GeoJSON();
var features_Anexo03readeExpansodoPorto_2 = format_Anexo03readeExpansodoPorto_2.readFeatures(json_Anexo03readeExpansodoPorto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Anexo03readeExpansodoPorto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo03readeExpansodoPorto_2.addFeatures(features_Anexo03readeExpansodoPorto_2);
var lyr_Anexo03readeExpansodoPorto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo03readeExpansodoPorto_2, 
                style: style_Anexo03readeExpansodoPorto_2,
                popuplayertitle: 'Anexo 03 - Área de Expansão do Porto',
                interactive: true,
                title: '<img src="styles/legend/Anexo03readeExpansodoPorto_2.png" /> Anexo 03 - Área de Expansão do Porto'
            });
var format_Anexo02readeDocas_3 = new ol.format.GeoJSON();
var features_Anexo02readeDocas_3 = format_Anexo02readeDocas_3.readFeatures(json_Anexo02readeDocas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Anexo02readeDocas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo02readeDocas_3.addFeatures(features_Anexo02readeDocas_3);
var lyr_Anexo02readeDocas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo02readeDocas_3, 
                style: style_Anexo02readeDocas_3,
                popuplayertitle: 'Anexo 02 - Área de Docas',
                interactive: true,
                title: '<img src="styles/legend/Anexo02readeDocas_3.png" /> Anexo 02 - Área de Docas'
            });
var format_Anexo01reaPrincipaldoPorto_4 = new ol.format.GeoJSON();
var features_Anexo01reaPrincipaldoPorto_4 = format_Anexo01reaPrincipaldoPorto_4.readFeatures(json_Anexo01reaPrincipaldoPorto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Anexo01reaPrincipaldoPorto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Anexo01reaPrincipaldoPorto_4.addFeatures(features_Anexo01reaPrincipaldoPorto_4);
var lyr_Anexo01reaPrincipaldoPorto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Anexo01reaPrincipaldoPorto_4, 
                style: style_Anexo01reaPrincipaldoPorto_4,
                popuplayertitle: 'Anexo 01 - Área Principal do Porto',
                interactive: true,
                title: '<img src="styles/legend/Anexo01reaPrincipaldoPorto_4.png" /> Anexo 01 - Área Principal do Porto'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Anexo04reaAquaviria_1.setVisible(true);lyr_Anexo03readeExpansodoPorto_2.setVisible(true);lyr_Anexo02readeDocas_3.setVisible(true);lyr_Anexo01reaPrincipaldoPorto_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Anexo04reaAquaviria_1,lyr_Anexo03readeExpansodoPorto_2,lyr_Anexo02readeDocas_3,lyr_Anexo01reaPrincipaldoPorto_4];
lyr_Anexo04reaAquaviria_1.set('fieldAliases', {'Name': 'Nome', });
lyr_Anexo03readeExpansodoPorto_2.set('fieldAliases', {'Name': 'Nome', });
lyr_Anexo02readeDocas_3.set('fieldAliases', {'Name': 'Name', });
lyr_Anexo01reaPrincipaldoPorto_4.set('fieldAliases', {'Name': 'Nome', });
lyr_Anexo04reaAquaviria_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo03readeExpansodoPorto_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo02readeDocas_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo01reaPrincipaldoPorto_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_Anexo04reaAquaviria_1.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Anexo03readeExpansodoPorto_2.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Anexo02readeDocas_3.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Anexo01reaPrincipaldoPorto_4.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Anexo01reaPrincipaldoPorto_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});