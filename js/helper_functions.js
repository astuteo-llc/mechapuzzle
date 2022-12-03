function render_all() {
    render_metadata();
    render_grid();
    render_theme();
    render_clues();
    render_entries();
    render_extension();
    render_sandbox();

    // This is just to show the raw data for development purposes
    document.getElementById('rawdata_js').innerHTML = JSON.stringify(PUZAPP.puzdata, null, ' ');
}

function render_metadata() {
    var puzdata = PUZAPP.puzdata;
    document.getElementById('metadata').innerHTML = '';
    document.getElementById('metadata').innerHTML += puzdata.title + '<br />';
    document.getElementById('metadata').innerHTML += puzdata.author + '<br />';
    document.getElementById('metadata').innerHTML += puzdata.notes + '<br />';
}

function sort_string(a, b) {
	var fa = a.toLowerCase();
	var fb = b.toLowerCase();
	if (fa < fb) {return -1;}
	if (fa > fb) {return 1;}
	return 0;
}

function sort_entries(arr, by) {
	if (by == 'Number') {
		arr.sort((a, b) => {return a['Number'] - b['Number'];});
	} else if (by == 'Clue') {
		arr.sort((a, b) => {return sort_string(a['Clue'], b['Clue']);});
	} else if (by == 'Entry') {
		arr.sort((a, b) => {return sort_string(a['Entry'], b['Entry']);});
	}
}