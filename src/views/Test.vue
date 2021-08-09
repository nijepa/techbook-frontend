<template>
    <div class="container" id="app">
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li
                    class="page-item"
                    v-bind:class="{ disabled: currentWeekNumber === 32 }"
                    v-on:click="currentWeekNumber -= 1"
                >
                    <a class="page-link" href="">Prev</a>
                </li>
                <!--                    change the currPage === 2 with currPage === weeksSize -->
                <li
                    class="page-item"
                    v-bind:class="{ disabled: currentWeekNumber === 35 }"
                    v-on:click.prevent="currentWeekNumber += 1"
                >
                    <a class="page-link" href="">Next {{currentWeekNumber}}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tickets: [],
            currentWeekNumber: this.getWeekNumber(new Date()),
        };
    },
    computed: {
        weeksSize() {
            const s = this.getAllWeekNumbers(this.tickets);
            return s.size;
        },
    },
    methods: {
        getWeekNumber(date) {
            const temp_date = new Date(date.valueOf());
            const dayn = (date.getDay() + 6) % 7;
            temp_date.setDate(temp_date.getDate() - dayn + 3);
            const firstThursday = temp_date.valueOf();
            temp_date.setMonth(0, 1);
            if (temp_date.getDay() !== 4)
            {
                temp_date.setMonth(0, 1 + ((4 - temp_date.getDay()) + 7) % 7);
            }
            return 1 + Math.ceil((firstThursday - temp_date) / 604800000);
        },
        findTicketsWeek(tickets) {
            return tickets.filter((ticket) => {
                return (
                    this.getWeekNumber(ticket.date) === this.currentWeekNumber
                );
            });
        },
    },
    mounted() {
   // if back button is pressed
   console.log('999')
   window.onpopstate = function(event) {
     alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
   };
}
};
</script>

<style>
.foo
{
display: flex;
background-color: #42b942; 
height: 50px;
width: 100%;
position: fixed;
bottom: 0;}
</style>