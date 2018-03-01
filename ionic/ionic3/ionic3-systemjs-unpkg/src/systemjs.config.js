/**
 * PLUNKER VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: 'tsconfig.preview.json'
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      pages: 'pages',

      // angular bundles
      '@angular/core': 'npm:@angular/core@4.2.2/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@4.2.2/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@4.2.2/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@4.2.2/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.2.2/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http@4.2.2/bundles/http.umd.js',
      '@angular/forms': 'npm:@angular/forms@4.2.2/bundles/forms.umd.js',
  
      "@ionic-native/core": "npm:@ionic-native/core/bundles/forms.umd.js",
      "@ionic-native/splash-screen": "npm:@ionic-native/splash-screen/bundles/forms.umd.js",
      "@ionic-native/status-bar": "npm:@ionic-native/status-bar/bundles/forms.umd.js",
      "@ionic/storage": "npm:@ionic/storage/bundles/forms.umd.js",
  
      'ionic-angular': 'npm:ionic-angular@3.4.0',
  
      "ionicons": "npm:@ionicons/bundles/forms.umd.js",
      "sw-toolbox": "npm:sw-toolbox/bundles/forms.umd.js",
      
      'rxjs': 'npm:rxjs@5.4.1',
      'ts': 'npm:plugin-typescript@5.2.7/lib/plugin.js',
      'typescript': 'npm:typescript@2.2.1/lib/typescript.js',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      pages: {
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ionic-angular': {
        main: './umd/index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);

