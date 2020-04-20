import React from 'react';

import { Doughnut } from 'react-chartjs-2'

class Graph extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data1:{
                labels: ['firstnum','secNum','total'],
                datasets: [
                  {
                    data: [this.props.first, this.props.second, this.props.total]
                  }
                ]
              }
        }
    }
    render(){
        return(
            <div>
        <Doughnut
          data={this.state.data1}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div>
        )
    }
}


export default Graph