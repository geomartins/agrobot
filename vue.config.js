module.exports = {

    
    // options...
    devServer: {
        proxy: {
            '/api': {
              target: 'https://lumen.lilycourt.ng',
              ws: true,
              changeOrigin: true,
              pathRewrite: {
                '^/api': ''
              }
            },
            
            
        }
        
        
         // proxy: 'https://lumen.lilycourt.ng/',
    }
}