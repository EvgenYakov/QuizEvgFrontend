import './homePage.scss'
import {Folder} from "../../types/types";
import Card from '@mui/material/Card';
import {Button, CardActions, CardContent, CardMedia, Checkbox, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export default function HomePage(){
    const folders: Folder[] = [
        {
            _id:'1',
            name: 'Programming',
            url: 'https://miro.medium.com/max/1160/1*FjPN80AOvRDyrox8vQbVyg@2x.png',
            count: 10,
            share: true
        },
        {
            _id:'2',
            name: 'Animals',
            url: 'https://mobimg.b-cdn.net/v3/fetch/80/807548893d3c824877406205a7aed13c.jpeg',
            count: 12,
            share: false
        },
        {
            _id:'3',
            name: 'Instruments',
            url: 'https://www.aacpl.net/sites/default/files/2019-08/Music.jpg',
            count: 5,
            share: true
        },
    ]
    return (
        <div className='homePage'>
            <div className='wrapper'>
                <div className='homeText'>
                    <h1>Make your live better</h1>
                    <h1>with our services</h1>
                    <Button variant="contained" endIcon={<SearchIcon />} size="large">Let's search new module</Button>
                </div>

            </div>
            <div>
                <ul  className='cardList'>
                    {
                        folders.map((folder)=>{
                            return(
                                <li key={folder._id}>
                                    <Card sx={{ width: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image={folder.url}
                                            title="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {folder.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Count of modules - {folder.count}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="contained" size="medium">Share</Button>

                                            <Checkbox  checked={folder.share} />
                                        </CardActions>
                                    </Card>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}