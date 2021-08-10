<template>
    


<tr class="list-content" v-for="(ticket, index) in findTickets(tickets, new Date())" :key="index">
                <td>{{ ticket.time }}</td>
                <td>{{ ticket.date }}</td>
                <td>{{ ticket.name }}</td>
            </tr>

</template>

<script>
export default {
    data() {
        return {
            tickets: [
                {time: '99', date: '2021-08-08', name: 'aaa'},
                {time: '99', date: 99, name: 'aaa'},
                {time: '99', date: '2021-08-10', name: 'aaa'},
            ],
            //currentWeekNumber: this.getWeekNumber(new Date()),
        };
    },
    
    methods: {
        findTickets(tickets, date) {
            return tickets.map((ticket) => {
                console.log(date)
                date = 99
                if (ticket.date !== date) return ticket
                ticket = {time: '', date: 'not', name: ''}
                return ticket
            });
        },
    },


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