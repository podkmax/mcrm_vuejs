function slotCalc(data) {
    var slot = {
        // name: "",
        slot1: "Свободно",
        slot2: "Свободно",
        slot3: "Свободно",
        slot4: "Свободно",
        slot5: "Свободно",
        slot6: "Свободно",
        slot7: "Свободно",
        slot8: "Свободно",
        slot9: "Свободно",
        slot10: "Свободно",
        slot11: "Свободно",
        slot12: "Свободно",
        slot13: "Свободно"
    };
    for (var key in data) {
        // slot.name = data[key].name;
        for (time in data[key].timeSlots) {
            switch (data[key].timeSlots[time].startTimeslot) {
                case '10:00':
                    slot.slot1 = "Занято";
                    break;
                case '10:30':
                    slot.slot2 = "Занято";
                    break;
                case '11:00':
                    slot.slot3 = "Занято";
                    break;
                case '11:30':
                    slot.slot4 = "Занято";
                    break;
                case '12:00':
                    slot.slot5 = "Занято";
                    break;
                case '12:30':
                    slot.slot6 = "Занято";
                    break;
                case '13:00':
                    slot.slot7 = "Занято";
                    break;
                case '13:30':
                    slot.slot8 = "Занято";
                    break;
                case '14:00':
                    slot.slot9 = "Занято";
                    break;
                case '14:30':
                    slot.slot10 = "Занято";
                    break;
                case '15:00':
                    slot.slot11 = "Занято";
                    break;
                case '15:30':
                    slot.slot12 = "Занято";
                    break;
                case '16:00':
                    slot.slot13 = "Занято";
                    break;
            }
        }
    }
    console.log(slot)
    return slot;
}

var app = new Vue({
    el: '#app',
    data: {
        endpoint: 'http://localhost:8080/controller',
        posts: {},
        slots: {}
    },
    methods: {
        getSome: function () {
            this.$http.get(this.endpoint).then(function (response) {
                this.posts = response.data
                this.slots = slotCalc(response.data);
                console.log(response.data)
            }, function (error) {

            })
        }
    },
    created: function() {
        this.getSome()
    }
});

