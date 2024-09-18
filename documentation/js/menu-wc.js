'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mintegs-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-733a75ff5f3e020e6d00761bdbece28a825a08b21454c7745f88fbbc2ea50e095fe994db20d1191dd9da37c8eaea1943224cbfab6ce14315d1526b7ebf3cfe3d"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-733a75ff5f3e020e6d00761bdbece28a825a08b21454c7745f88fbbc2ea50e095fe994db20d1191dd9da37c8eaea1943224cbfab6ce14315d1526b7ebf3cfe3d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-733a75ff5f3e020e6d00761bdbece28a825a08b21454c7745f88fbbc2ea50e095fe994db20d1191dd9da37c8eaea1943224cbfab6ce14315d1526b7ebf3cfe3d"' :
                                            'id="xs-controllers-links-module-AuthModule-733a75ff5f3e020e6d00761bdbece28a825a08b21454c7745f88fbbc2ea50e095fe994db20d1191dd9da37c8eaea1943224cbfab6ce14315d1526b7ebf3cfe3d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-733a75ff5f3e020e6d00761bdbece28a825a08b21454c7745f88fbbc2ea50e095fe994db20d1191dd9da37c8eaea1943224cbfab6ce14315d1526b7ebf3cfe3d"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-733a75ff5f3e020e6d00761bdbece28a825a08b21454c7745f88fbbc2ea50e095fe994db20d1191dd9da37c8eaea1943224cbfab6ce14315d1526b7ebf3cfe3d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-733a75ff5f3e020e6d00761bdbece28a825a08b21454c7745f88fbbc2ea50e095fe994db20d1191dd9da37c8eaea1943224cbfab6ce14315d1526b7ebf3cfe3d"' :
                                        'id="xs-injectables-links-module-AuthModule-733a75ff5f3e020e6d00761bdbece28a825a08b21454c7745f88fbbc2ea50e095fe994db20d1191dd9da37c8eaea1943224cbfab6ce14315d1526b7ebf3cfe3d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnvModule.html" data-type="entity-link" >EnvModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SessionsModule.html" data-type="entity-link" >SessionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SessionsModule-588c95771daa5e03f247314c112b1d3feec9e542a1ff420ed5a1c15715dba78695f3dd081cd3339e9ef2563287e96b3c83a9aad44b28e8defe5ba70e9bd6a113"' : 'data-bs-target="#xs-controllers-links-module-SessionsModule-588c95771daa5e03f247314c112b1d3feec9e542a1ff420ed5a1c15715dba78695f3dd081cd3339e9ef2563287e96b3c83a9aad44b28e8defe5ba70e9bd6a113"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SessionsModule-588c95771daa5e03f247314c112b1d3feec9e542a1ff420ed5a1c15715dba78695f3dd081cd3339e9ef2563287e96b3c83a9aad44b28e8defe5ba70e9bd6a113"' :
                                            'id="xs-controllers-links-module-SessionsModule-588c95771daa5e03f247314c112b1d3feec9e542a1ff420ed5a1c15715dba78695f3dd081cd3339e9ef2563287e96b3c83a9aad44b28e8defe5ba70e9bd6a113"' }>
                                            <li class="link">
                                                <a href="controllers/SessionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SessionsModule-588c95771daa5e03f247314c112b1d3feec9e542a1ff420ed5a1c15715dba78695f3dd081cd3339e9ef2563287e96b3c83a9aad44b28e8defe5ba70e9bd6a113"' : 'data-bs-target="#xs-injectables-links-module-SessionsModule-588c95771daa5e03f247314c112b1d3feec9e542a1ff420ed5a1c15715dba78695f3dd081cd3339e9ef2563287e96b3c83a9aad44b28e8defe5ba70e9bd6a113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SessionsModule-588c95771daa5e03f247314c112b1d3feec9e542a1ff420ed5a1c15715dba78695f3dd081cd3339e9ef2563287e96b3c83a9aad44b28e8defe5ba70e9bd6a113"' :
                                        'id="xs-injectables-links-module-SessionsModule-588c95771daa5e03f247314c112b1d3feec9e542a1ff420ed5a1c15715dba78695f3dd081cd3339e9ef2563287e96b3c83a9aad44b28e8defe5ba70e9bd6a113"' }>
                                        <li class="link">
                                            <a href="injectables/SessionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-9887d53f38d3dd72e067144b6f8cd1193b6a0eb10a7b1f8ea486f87e0e6c0ac96bd1dd46f9c8dc25d492ef8bb8fec07ac9a8dbaebf5b15af1212ebece8892044"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-9887d53f38d3dd72e067144b6f8cd1193b6a0eb10a7b1f8ea486f87e0e6c0ac96bd1dd46f9c8dc25d492ef8bb8fec07ac9a8dbaebf5b15af1212ebece8892044"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-9887d53f38d3dd72e067144b6f8cd1193b6a0eb10a7b1f8ea486f87e0e6c0ac96bd1dd46f9c8dc25d492ef8bb8fec07ac9a8dbaebf5b15af1212ebece8892044"' :
                                            'id="xs-controllers-links-module-UsersModule-9887d53f38d3dd72e067144b6f8cd1193b6a0eb10a7b1f8ea486f87e0e6c0ac96bd1dd46f9c8dc25d492ef8bb8fec07ac9a8dbaebf5b15af1212ebece8892044"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-9887d53f38d3dd72e067144b6f8cd1193b6a0eb10a7b1f8ea486f87e0e6c0ac96bd1dd46f9c8dc25d492ef8bb8fec07ac9a8dbaebf5b15af1212ebece8892044"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-9887d53f38d3dd72e067144b6f8cd1193b6a0eb10a7b1f8ea486f87e0e6c0ac96bd1dd46f9c8dc25d492ef8bb8fec07ac9a8dbaebf5b15af1212ebece8892044"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-9887d53f38d3dd72e067144b6f8cd1193b6a0eb10a7b1f8ea486f87e0e6c0ac96bd1dd46f9c8dc25d492ef8bb8fec07ac9a8dbaebf5b15af1212ebece8892044"' :
                                        'id="xs-injectables-links-module-UsersModule-9887d53f38d3dd72e067144b6f8cd1193b6a0eb10a7b1f8ea486f87e0e6c0ac96bd1dd46f9c8dc25d492ef8bb8fec07ac9a8dbaebf5b15af1212ebece8892044"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Session.html" data-type="entity-link" >Session</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateSessionIndexes1726229695133.html" data-type="entity-link" >CreateSessionIndexes1726229695133</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserIndexes1726228684695.html" data-type="entity-link" >CreateUserIndexes1726228684695</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserIndexes1726229324413.html" data-type="entity-link" >CreateUserIndexes1726229324413</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenerateTables1725986093329.html" data-type="entity-link" >GenerateTables1725986093329</a>
                            </li>
                            <li class="link">
                                <a href="classes/IdDto.html" data-type="entity-link" >IdDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationQueryDto.html" data-type="entity-link" >PaginationQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegistryDates.html" data-type="entity-link" >RegistryDates</a>
                            </li>
                            <li class="link">
                                <a href="classes/RemoveDto.html" data-type="entity-link" >RemoveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserChangePasswordDto.html" data-type="entity-link" >UserChangePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersSubscriber.html" data-type="entity-link" >UsersSubscriber</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BcryptProvider.html" data-type="entity-link" >BcryptProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginValidationMiddleware.html" data-type="entity-link" >LoginValidationMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaginationProvider.html" data-type="entity-link" >PaginationProvider</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CustomRequest.html" data-type="entity-link" >CustomRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomUser.html" data-type="entity-link" >CustomUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Device.html" data-type="entity-link" >Device</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Paginated.html" data-type="entity-link" >Paginated</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});