var set_timeSlot = new Vue ({
    el: '#set_timeSlot',
    data: {
        docName: [],
        doctors: [],
        day: '',
        selected: []
    },
    methods: {
        getDoc: function () {
            this.$http.get('http://localhost:8080/generate').then(function (response) {
                this.doctors = response.data;
                for (doctor in response.data) {
                    this.docName.push(response.data[doctor].name);
                }
            }, function (error) {
                console.log(error)
            });
        },
        setTimeSlots: function () {
            var timeSlot = {};
            timeSlot.day = this.day;
            timeSlot.doc = this.selected;
            console.log(JSON.stringify(timeSlot))
            this.$http.post('http://localhost:8080/generate', JSON.stringify(timeSlot))
        },
        getIdDoctor: function () {
            var docID = [];
            for (doctor in this.doctors) {
                
            }
        }
    },
    created: function () {
        this.getDoc();
    }
});