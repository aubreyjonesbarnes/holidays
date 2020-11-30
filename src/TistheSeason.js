import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Container, List, ListItem, Card} from '@material-ui/core'
import LazyLoad from 'react-lazyload'
import holidaysStyles from './css/holidaysStyles.css'



const Loading = () => (
<div>
<h4>Loading...</h4>

</div>

)


const TistheSeason = () => {




const [holidayData, setHolidayData] = useState({
loading: false, 
holidays: []

})

const fetchHolidays = () => {
axios.get(`https://holidayapi.com/v1/holidays?key=f5036d60-1c54-4c9b-8ca8-cca94bf3cc02&country=US&year=2019`, //{
 //   headers: {'api-key': process.env.REACT_APP_HOLIDAYS_API_KEY,}
//}
)
.then(function (response){
setHolidayData({
loading: false, 
holidays: response.data.holidays   

})
})
}


useEffect(() => {
    fetchHolidays()
}, [])




return (
    <html>
    <div>
    {!holidayData.loading && (
    <div>
    <List>
    {holidayData.holidays.map((holiday) => {
    return (
    <LazyLoad
    key={holiday.country + holiday.public}
    placeholder={<Loading />}
    height={400}
    
    >
    </LazyLoad>
    
    )

})}
  </List>
  
  <main>
 
 
  {holidayData.holidays.map((holiday) => {
    return (
    
<Container maxWidth="lg">
<Card className="CalenderHolidays">
<List className="calendarNames">       
 <ListItem>{holiday.name}</ListItem>
 <ListItem>{holiday.date}</ListItem>
 </List>
 </Card>
</Container>
 
    )
  })}
  
   </main>
   
    </div>
    )}  
 
    
    </div>
    </html>
)}
  
export default TistheSeason 