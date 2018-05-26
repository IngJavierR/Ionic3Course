module.exports = {
    copyMaterialThemeCSS: {
        src: ['{{ROOT}}/node_modules/@angular/material/prebuilt-themes/indigo-pink.css'],
        dest: '{{WWW}}/assets'
    },
    copySignatureCSS: {
        src: ['{{ROOT}}/node_modules/angular-signature-pad/styles.scss'],
        dest: '{{WWW}}/assets'
    }
}