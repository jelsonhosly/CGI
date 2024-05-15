import'./CSS/main2.css';
export default function Physical(){
    return(
        <div className="content1">
            <div className='maintopic'>PHYSICAL ACTIVITY, SEDENTARY ACTIVITIES, AND SLEEP - RECOMMENDATIONS FOR CHILDREN </div>

           <p> Daily activities includes physical activities (sports, exercise, walking), sedentary activities (reading, watching television, 
            using a computer or other related software), and sleep.  It is very important to get used to handling these activities in a 
            day from childhood to achieve optimal health later on.</p>

            <div>Given below is how children of different age groups should engage in different activities every day.</div><br/>

            <div>
                <table className='table'>
                    <tr>
                        <th rowSpan={2}>Age</th>
                        <th colSpan={2}>Time Spent Per Day</th>
                        <th rowSpan={2}>Sleep</th>
                    </tr>
                    <tr> 
                        <th>Physical Activities</th>
                        <th>Watching Television, Using Mobile Phones or other such software</th>
                    </tr>
                    
                    <tr>
                        <td className='age'>Month 0 - 3</td>
                        <td>At least half an hour</td>
                        <td>Not Recommended</td> 
                        <td className='age'>14 - 17 hours</td>
                    </tr>
                    <tr>
                        <td className='age'>Month 4 - 11</td>
                       <td>At least half an hour</td>
                        <td>Not Recommended</td> 
                        <td className='age'>12 - 16 hours</td>
                    </tr>
                    <tr>
                        <td className='age'>Month 12 - 23</td>
                            <td>At least 3 hours</td>
                           <td>Not Recommended</td> 
                        <td className='age'>11 - 14 hours</td>
                    </tr>
                    <tr>
                        <td className='age'>Month 24 - 35</td>
                            <td>At least 3 hours</td>
                           <td>In less than an hour</td> 
                        <td className='age'>11 - 14 hours</td>
                    </tr>
                    <tr>
                        <td className='age'>Month 36 - 59</td>
                            <td>At least 3 hours(At least 1 hour of moderate or vigorous intensity activity)</td>
                           <td>Unnecessary.Limits as much as possible.Total time should be less than one hour.</td> 
                        <td className='age'>10 - 13 hours</td>
                    </tr>
                    <tr>
                        <td className='age'>5 - 12 Years</td>
                            <td>Moderate or vigorous-intensity activity for at least one hour.</td>
                           <td>Limit the maximum time spent at a time to one hour.</td> 
                        <td className='age'>9 - 11 hours</td>
                    </tr>
                    <tr>
                        <td className='age'>13 - 19 Years</td>
                            <td>Moderate or vigorous-intensity activity for at least one hour.</td>
                           <td>Limit the maximum time spent at a time to one hour.</td> 
                        <td className='age'>8 - 10 hours</td>
                    </tr>
                    
                </table>
            </div><br/><br/>
            <div>
            Children should be encouraged to do physical activities as much as possible.  The recommended time for this can be planned to span the 
entire day.  In the infant stage (under 3 months of age), lying on the hand (on the stomach) helps to increase activity.
            </div><br/>

<div>
Watching television, computers, where you have to stay in one place without straining your body.  Activities such as use of mobile 
 phones or other such software should be restricted.  Apart from physical inactivity, these devices have also been found to have various 
 other adverse effects on growing children.  It is more effective to devote this time to reading books (such as telling stories to young 
 children). However, it is recommended that this activity be kept to a minimum of less than an hour at a time. 
 
 <br/><br/> Adequate sleep is essential for good health.  It is advisable to sleep between 10 and 4 a.m. It is the parents' responsibility to teach children to go to bed at a fixed 
 time (eg 8.30 p.m.) and wake up at a fixed time.
</div>

 
        </div>
    )
}