// Libs
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// Axios Config
import instance from '../../services/AxiosConfig';
// Styled
import { Banner, Container, GridHeroes, HeroesList } from './components/Styled';
import Header from '../../components/Header';
// Images
import ImgBanner from '../../assets/banner.png';
import { Titles } from '../../components/Text';
import Search from './components/Search';
import Card from './components/Card';
import Pagination from './components/Pagination';
import Loading from './components/Loading';
import EmptyResult from './components/EmptyResult';

// Exibe a lista de heróis com paginação ou o resultado da pesquisa efetuada pelo usuário
function Heroes() {
  const [heroes, setHeroes] = useState([]);
  const [search, setSearch] = useState('');
  const [settings, setSettings] = useState({
    limit: 20,
    offset: 0,
    total: null,
    count: null,
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const history = useHistory();

  // Chama a função que faz a busca inicial da página 1 de heróis da API
  useEffect(() => {
    getHeroes(settings.offset);
  }, []);

  const getSearchInput = (text) => {
    setSearch(text);
    if (!text) {
      getHeroes(settings.offset);
    }
  };

  // Recebe o offset passando-o para a função getHeroes, que faz a requisição.
  // Chamada pelo component de paginação.
  const getPageFromOffset = (offset) => {
    getHeroes(offset);
  };

  // Realiza a pesquisa na API através dos caracteres iniciais do nome do herói.
  const doSearch = async () => {
    setLoading(true);
    try {
      const result = await instance.get(
        `/characters?ts=1&apikey=${process.env.REACT_APP_APIKEY}&hash=${process.env.REACT_APP_HASH}&nameStartsWith=${search}&limit=40`
      );
      setHeroes(result.data.data.results);
      setLoading(false);
      setIsSearch(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setApiError(true);
    }
  };

  // Realiza a busca na API passando o limite e offset salvos na variável de estado Settings
  // O limite é a quantidade máxima de heróis retornadas na requisição, por default
  // ficou setada em 20. O offSet pula uma determinada quantidade de resultados da requisição
  const getHeroes = async (offset) => {
    setLoading(true);
    setIsSearch(false);
    try {
      const result = await instance.get(
        `/characters?ts=1&apikey=${process.env.REACT_APP_APIKEY}&hash=${process.env.REACT_APP_HASH}&limit=${settings.limit}&offset=${offset}`
      );
      setHeroes(result.data.data.results);
      setSettings({
        ...settings,
        total: result.data.data.total,
        offset,
        count: result.data.data.count,
      });
      console.log(settings);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setApiError(true);
    }
  };

  // Função que chama a tela de detalhes do herói selecionado
  const callDetails = (hero) => {
    history.push('/details', hero);
  };

  return (
    <Container>
      <Header />
      <Banner src={ImgBanner} />
      <Titles>Marvel Characters List</Titles>
      <Search onChange={getSearchInput} value={search} onClick={doSearch} />
      {loading && <Loading />}
      {!loading && heroes.length === 0 && !apiError && <EmptyResult />}
      {!loading && apiError && <EmptyResult isError />}
      {heroes.length > 0 && !loading && !apiError && (
        <GridHeroes>
          <HeroesList>
            {heroes.map((hero) => (
              <Card
                hero={hero}
                key={hero.id.toString()}
                onClick={() => callDetails(hero)}
              />
            ))}
          </HeroesList>
        </GridHeroes>
      )}
      {settings.total !== 0 && !loading && !isSearch && !apiError && (
        <Pagination
          total={settings.total}
          count={settings.count}
          offset={settings.offset}
          getHeroes={getPageFromOffset}
        />
      )}
    </Container>
  );
}

export { Heroes };
