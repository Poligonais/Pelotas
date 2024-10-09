var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoIVreaAquaviria_1 = new ol.format.GeoJSON();
var features_AnexoIVreaAquaviria_1 = format_AnexoIVreaAquaviria_1.readFeatures(json_AnexoIVreaAquaviria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVreaAquaviria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVreaAquaviria_1.addFeatures(features_AnexoIVreaAquaviria_1);
var lyr_AnexoIVreaAquaviria_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVreaAquaviria_1, 
                style: style_AnexoIVreaAquaviria_1,
                popuplayertitle: "Anexo IV - Área Aquaviária",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVreaAquaviria_1.png" /> Anexo IV - Área Aquaviária'
            });
var format_AnexoIIIreadeExpansodoPorto_2 = new ol.format.GeoJSON();
var features_AnexoIIIreadeExpansodoPorto_2 = format_AnexoIIIreadeExpansodoPorto_2.readFeatures(json_AnexoIIIreadeExpansodoPorto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIIreadeExpansodoPorto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIIreadeExpansodoPorto_2.addFeatures(features_AnexoIIIreadeExpansodoPorto_2);
var lyr_AnexoIIIreadeExpansodoPorto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIIreadeExpansodoPorto_2, 
                style: style_AnexoIIIreadeExpansodoPorto_2,
                popuplayertitle: "Anexo III - Área de Expansão do Porto",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIIreadeExpansodoPorto_2.png" /> Anexo III - Área de Expansão do Porto'
            });
var format_AnexoIIreadeDocas_3 = new ol.format.GeoJSON();
var features_AnexoIIreadeDocas_3 = format_AnexoIIreadeDocas_3.readFeatures(json_AnexoIIreadeDocas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIreadeDocas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIreadeDocas_3.addFeatures(features_AnexoIIreadeDocas_3);
var lyr_AnexoIIreadeDocas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIreadeDocas_3, 
                style: style_AnexoIIreadeDocas_3,
                popuplayertitle: "Anexo II - Área de Docas",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIreadeDocas_3.png" /> Anexo II - Área de Docas'
            });
var format_AnexoIreaPrincipaldoPorto_4 = new ol.format.GeoJSON();
var features_AnexoIreaPrincipaldoPorto_4 = format_AnexoIreaPrincipaldoPorto_4.readFeatures(json_AnexoIreaPrincipaldoPorto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIreaPrincipaldoPorto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIreaPrincipaldoPorto_4.addFeatures(features_AnexoIreaPrincipaldoPorto_4);
var lyr_AnexoIreaPrincipaldoPorto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIreaPrincipaldoPorto_4, 
                style: style_AnexoIreaPrincipaldoPorto_4,
                popuplayertitle: "Anexo I - Área Principal do Porto",
                interactive: true,
                title: '<img src="styles/legend/AnexoIreaPrincipaldoPorto_4.png" /> Anexo I - Área Principal do Porto'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoIVreaAquaviria_1.setVisible(true);lyr_AnexoIIIreadeExpansodoPorto_2.setVisible(true);lyr_AnexoIIreadeDocas_3.setVisible(true);lyr_AnexoIreaPrincipaldoPorto_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoIVreaAquaviria_1,lyr_AnexoIIIreadeExpansodoPorto_2,lyr_AnexoIIreadeDocas_3,lyr_AnexoIreaPrincipaldoPorto_4];
lyr_AnexoIVreaAquaviria_1.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoIIIreadeExpansodoPorto_2.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoIIreadeDocas_3.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoIreaPrincipaldoPorto_4.set('fieldAliases', {'Name': 'Name', });
lyr_AnexoIVreaAquaviria_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoIIIreadeExpansodoPorto_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoIIreadeDocas_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoIreaPrincipaldoPorto_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_AnexoIVreaAquaviria_1.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoIIIreadeExpansodoPorto_2.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoIIreadeDocas_3.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoIreaPrincipaldoPorto_4.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_AnexoIreaPrincipaldoPorto_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});