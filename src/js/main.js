new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

var typed = new Typed('#git', {
    strings: ['git push --force ^500\n`pushed to origin with option force`'],
    typeSpeed: 100
});

new Vue({
    el: '#vue-ex',
    data: {
        identity: 'sun',
        people: [
            {value: 'wan', name: '万'},
            {value: 'sun', name: '孙'},
            {value: 'tan', name: '谭'},
        ],
        addPerson: function(o){
            var a = ex.$data.people;
            for(var i in a) {
                if(a[i].value === o.value) {
                    alert('O不jbK, existed.');
                    return;
                }
            }
            a.push(o);
            alert('OjbK.');
        }
    }
})