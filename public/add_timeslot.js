var doctors = [];
var slotsAvailable = [];
var response = {};

function getDocName(response) {
    for (key in response) {
        console.log(response[key].name);
        doctors.push(response[key].name);
    }
}
var currentDoc = '';
function getSlotByDoc() {
    console.log(response)
    for (var key in response) {
        console.log(response[key].name === currentDoc)
        if (response[key].name === currentDoc) {
            for (time in response[key].timeSlots) {
                console.log(response[key].timeSlots[time].startTimeslot)
                window.slotsAvailable.push(response[key].timeSlots[time].startTimeslot)
                console.log(window.slotsAvailable);
            }
        }
    }
}

var date_picker = new Vue({
   el: '#date_picker',
   data: {
       message: ''
   },
    methods: {
        send_date: function () {
            this.$http.post('http://localhost:8080/addtimeslot', this.message).then(function (response) {
                window.response = response.data;
                getDocName(window.response);
            }, function (error){
                console.log(error);
            })
        }
    }

});

var doc_select = new Vue({
    el: '#doc_select',
    data: {
        endpoint: 'http://localhost:8080/addtimeslot',
        selected: '',
        options: doctors
    },
    methods: {
        getSome: function () {
            this.$http.get(this.endpoint).then(function (response) {
                this.posts = response.data
                this.slots = slotCalc(response.data);
                console.log(response.data)
            }, function (error) {

            })
        },
        test: function () {
            currentDoc = this.selected;
            console.log(currentDoc);
            getSlotByDoc();
            // this.$http.post('http://localhost:8080/addtimeslot', this.selected).then(function (response) {
            //     console.log(response.bodyText);
            // }, function (error){
            //     console.log(error);
            // })
                // console.log(this.selected);
        }

    }
})

new Vue({
    el: '#slot_select',
    data: {
        selected: 'A',
        options: slotsAvailable
    }
});