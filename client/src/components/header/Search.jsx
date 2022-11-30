import { useState, useEffect } from "react";
import { InputBase , Box , List , ListItem, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from "../../redux/actions/productsAction";

const SearchContainer = styled(Box)`
    background : #fff;
    width: 35%;
    margin-left:10px;
    border-radius:2px;
    display: flex;
`;

const SearchBox = styled(InputBase)(({ theme })=>({
    width: '100%',
    paddingLeft: '20px',

    [theme.breakpoints.down('md')]: {
        width: '150%'
    }    
}));
    

const Searchicon = styled(SearchIcon)`
   color:blue;
   padding-top:5px;
   padding-right:5px;
   display: flex;
   :hover {
    cursor: pointer;
  }
`;

const ListWrapper = styled(List)`
  position: absolute;
  background:#fff;
  color: #000;
  margin-top:36px;
`;

const Search = () =>{

    const dispatch = useDispatch();
    const {products} = useSelector(state => state.getProducts);
    const [text, setText] = useState('');
    const [ open, setOpen ] = useState(true);


    useEffect(() => {
       dispatch(getProducts);
    }, [dispatch]);


    const getSearch = (text) =>{
        setText(text);
        setOpen(false);
    }

    return(
        <SearchContainer>
            <SearchBox placeholder="Search for products, brands and more" onChange={(e)=>getSearch(e.target.value)}></SearchBox>
            <Box>
              <Searchicon style={{color:'blue', paddingTop:'5px',paddingRight:'5px' }} />
            </Box>
        

        {
            text && 
            <ListWrapper>

                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={ () => { setOpen(!open) ; setText('') } }  
                      > 
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                } 
            
            </ListWrapper>
        }


        </SearchContainer>
    )
}
export default Search;