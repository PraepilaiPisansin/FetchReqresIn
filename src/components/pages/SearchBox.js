import React from 'react';
const SearchBox = (props) => {
    return (
        <div class="search-bar  ">
          
            <input
                type='text'
                placeholder={'Search User'}
                //onChange={(e) => setKeyword(e.target.value)}
                //value={value}
                onChange={e => props.searchUser(e)}
                className="barstyle"

            />
            <span><i class="bi bi-search search-icon"></i></span>
        </div>
    );
}
export default SearchBox;
