const { render, screen } = require("@testing-library/react");
const { AuthContext } = require("../../src/auth");
const { MemoryRouter } = require("react-router-dom");
const { AppRouter } = require("../../src/router/AppRouter");

// import { render, screen } from '@testing-library/react';
// import { AuthContext } from '../../src/auth';
// import { MemoryRouter } from 'react-router-dom';
// import { AppRouter } from '../../src/router/AppRouter';


describe('Pruebas en <AppRouter />', () => {

  test('debe de mostrar el login si no está autenticado', () => {

    const contextValue = {
      logged: false,
    }
 
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect( screen.getAllByAltText('Login').length ).toBe(2)

  });

  test('debe de mostrar el componente de Marvel si está autenticado', () => {

    const contextValue = {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Julio César'
      }
    }

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect( screen.getAllByAltText('Marvel').length ).toBeGreaterThanOrEqual(1);

  });

});