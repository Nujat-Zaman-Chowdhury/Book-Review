import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";


import useLocalStorage from "../../Hook/useLocalStorage";
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PagestoRead = () => {

    const {localData} = useLocalStorage();
    
    // console.log(localData);

    const barChartData = [];
    localData.map(book=>{
        barChartData.push({
            "bookName" : book.bookName,
            "totalPages":book.totalPages,
        });
    });

    
    
    
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    return (
        <div>
            
            <div className="w-full h-80 flex justify-center item">
           
            <ResponsiveContainer>
                <BarChart
                    data={barChartData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {barChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer> 
         </div>
        </div>
    );
};

export default PagestoRead;