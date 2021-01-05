import React, { useEffect, useReducer } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Platform
} from 'react-native';
import SearchBar from './components/SearchBar';
import SeriesItem from './components/SeriesItem';
import { SearchReducer, initialState  , ACTIONS} from './reducers/SearchReducer'
import { fetchData, fetchNextPage } from './API/SearchApi'
import DisplayMessage from './components/DisplayMessage';





const App = () => {


  const [state, dispatch] = useReducer(SearchReducer, initialState)

  const { query, page, error, loading, loadingMore, DATA } = state


  useEffect(() => {

    if (query.length > 2) {


      fetchData(query, dispatch)
    } else {
      dispatch({ type: ACTIONS.SET_DATA, payload: [] })
    }


  }, [query])




  const loadNextPage = () => {
    if (!loadingMore) {

      dispatch({ type: ACTIONS.SET_LOADING_MORE , payload: true })

      let nextPage = page + 1

      dispatch({ type: ACTIONS.SET_PAGE, payload: nextPage })

      fetchNextPage(query, nextPage, DATA, dispatch)

    }
  }





  return (
    <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 18, backgroundColor: 'white'  }}>
      <View style={styles.header} >

        <SearchBar query={query} fetchData={() => { fetchData(query, dispatch) }} setQuery={q => { dispatch({ type: ACTIONS.SET_QUERY, payload: q }) }} />

      </View>

      {
        loading
          ?
          <View style={styles.messageLayout} >
            <ActivityIndicator size='large' color='grey' />
          </View>
          :
          query.length < 3 && error == null ?
            <DisplayMessage message="Search Something" />
            :
            error !== null ?
              <DisplayMessage message={JSON.stringify(error.message)} />
              :
              <FlatList

                data={DATA}

                ListFooterComponent={() => {
                  return loadingMore ?
                    <View style={styles.loadMoreButton} >
                      <ActivityIndicator size="small" color="grey" />
                    </View>
                    :
                    <TouchableOpacity style={styles.loadMoreButton} activeOpacity={0.9} onPress={() => { loadNextPage() }} >

                      <Text style={styles.loadMoretext} > Load More..</Text>

                    </TouchableOpacity>



                }}


                keyExtractor={item => item.mal_id.toString()}

                removeClippedSubviews={false}


                showsVerticalScrollIndicator={false}

                renderItem={({ item, index }) => {

                  return (
                    <SeriesItem series={item} />
                  )
                }}

              />

      }



    </View>
  );
};

const styles = StyleSheet.create({

  messageLayout: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },

  header: {
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    overflow: "hidden",
    flexDirection: "row"
  },
  loadMoreButton: {
    alignSelf: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    marginVertical: 10,
    flex: 1
  },
  loadMoretext: {
    fontSize: 14,
    color: "grey"
  }
});

export default App;
