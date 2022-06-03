
insideJS.loadScript('app/modules/demo_panel/init.js');

let control_panel_html = insideJS.tools.getFile('app/modules/demo_panel/control_panel.html');
document.getElementById('control_panel').innerHTML = control_panel_html;
