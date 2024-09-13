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
                                            'data-bs-target="#controllers-links-module-AuthModule-44cd2e9cc8c8ad4fd67fa3a5e26b81037538472e22bc2c9eb972f555c5850aac3dae8389896be86345da6119555ec7d372bc2d657023944da7a123cc6a876f37"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-44cd2e9cc8c8ad4fd67fa3a5e26b81037538472e22bc2c9eb972f555c5850aac3dae8389896be86345da6119555ec7d372bc2d657023944da7a123cc6a876f37"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-44cd2e9cc8c8ad4fd67fa3a5e26b81037538472e22bc2c9eb972f555c5850aac3dae8389896be86345da6119555ec7d372bc2d657023944da7a123cc6a876f37"' :
                                            'id="xs-controllers-links-module-AuthModule-44cd2e9cc8c8ad4fd67fa3a5e26b81037538472e22bc2c9eb972f555c5850aac3dae8389896be86345da6119555ec7d372bc2d657023944da7a123cc6a876f37"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-44cd2e9cc8c8ad4fd67fa3a5e26b81037538472e22bc2c9eb972f555c5850aac3dae8389896be86345da6119555ec7d372bc2d657023944da7a123cc6a876f37"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-44cd2e9cc8c8ad4fd67fa3a5e26b81037538472e22bc2c9eb972f555c5850aac3dae8389896be86345da6119555ec7d372bc2d657023944da7a123cc6a876f37"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-44cd2e9cc8c8ad4fd67fa3a5e26b81037538472e22bc2c9eb972f555c5850aac3dae8389896be86345da6119555ec7d372bc2d657023944da7a123cc6a876f37"' :
                                        'id="xs-injectables-links-module-AuthModule-44cd2e9cc8c8ad4fd67fa3a5e26b81037538472e22bc2c9eb972f555c5850aac3dae8389896be86345da6119555ec7d372bc2d657023944da7a123cc6a876f37"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
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
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaginationModule-f920d7c583cb31c9fa2d33aebc1b5152ce4d4cd6beb7d5924c1021076663b987e41169b432c26b5f3a972d340c1c6258839b227a67e0f52d4e63f2c684bfafb2"' : 'data-bs-target="#xs-injectables-links-module-PaginationModule-f920d7c583cb31c9fa2d33aebc1b5152ce4d4cd6beb7d5924c1021076663b987e41169b432c26b5f3a972d340c1c6258839b227a67e0f52d4e63f2c684bfafb2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaginationModule-f920d7c583cb31c9fa2d33aebc1b5152ce4d4cd6beb7d5924c1021076663b987e41169b432c26b5f3a972d340c1c6258839b227a67e0f52d4e63f2c684bfafb2"' :
                                        'id="xs-injectables-links-module-PaginationModule-f920d7c583cb31c9fa2d33aebc1b5152ce4d4cd6beb7d5924c1021076663b987e41169b432c26b5f3a972d340c1c6258839b227a67e0f52d4e63f2c684bfafb2"' }>
                                        <li class="link">
                                            <a href="injectables/PaginationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SessionsModule.html" data-type="entity-link" >SessionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SessionsModule-1a577ef513fc572cd915b59a1e522c5f56731936c1ea166485ad1ce57805cb722b559aaf99eab5f836280e0c9fe609c54cf845b9c9ac895a7d976117e7e13cde"' : 'data-bs-target="#xs-controllers-links-module-SessionsModule-1a577ef513fc572cd915b59a1e522c5f56731936c1ea166485ad1ce57805cb722b559aaf99eab5f836280e0c9fe609c54cf845b9c9ac895a7d976117e7e13cde"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SessionsModule-1a577ef513fc572cd915b59a1e522c5f56731936c1ea166485ad1ce57805cb722b559aaf99eab5f836280e0c9fe609c54cf845b9c9ac895a7d976117e7e13cde"' :
                                            'id="xs-controllers-links-module-SessionsModule-1a577ef513fc572cd915b59a1e522c5f56731936c1ea166485ad1ce57805cb722b559aaf99eab5f836280e0c9fe609c54cf845b9c9ac895a7d976117e7e13cde"' }>
                                            <li class="link">
                                                <a href="controllers/SessionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SessionsModule-1a577ef513fc572cd915b59a1e522c5f56731936c1ea166485ad1ce57805cb722b559aaf99eab5f836280e0c9fe609c54cf845b9c9ac895a7d976117e7e13cde"' : 'data-bs-target="#xs-injectables-links-module-SessionsModule-1a577ef513fc572cd915b59a1e522c5f56731936c1ea166485ad1ce57805cb722b559aaf99eab5f836280e0c9fe609c54cf845b9c9ac895a7d976117e7e13cde"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SessionsModule-1a577ef513fc572cd915b59a1e522c5f56731936c1ea166485ad1ce57805cb722b559aaf99eab5f836280e0c9fe609c54cf845b9c9ac895a7d976117e7e13cde"' :
                                        'id="xs-injectables-links-module-SessionsModule-1a577ef513fc572cd915b59a1e522c5f56731936c1ea166485ad1ce57805cb722b559aaf99eab5f836280e0c9fe609c54cf845b9c9ac895a7d976117e7e13cde"' }>
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
                                            'data-bs-target="#controllers-links-module-UsersModule-e8691fa92f2b3af437176667b1e8d26aaba661d9d07040cdeddd933b0c2b32c6a2946d9b6b14f29ea75167ce56a1405127a01c8c7c2a2f6e20857cbf0ebe0484"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-e8691fa92f2b3af437176667b1e8d26aaba661d9d07040cdeddd933b0c2b32c6a2946d9b6b14f29ea75167ce56a1405127a01c8c7c2a2f6e20857cbf0ebe0484"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-e8691fa92f2b3af437176667b1e8d26aaba661d9d07040cdeddd933b0c2b32c6a2946d9b6b14f29ea75167ce56a1405127a01c8c7c2a2f6e20857cbf0ebe0484"' :
                                            'id="xs-controllers-links-module-UsersModule-e8691fa92f2b3af437176667b1e8d26aaba661d9d07040cdeddd933b0c2b32c6a2946d9b6b14f29ea75167ce56a1405127a01c8c7c2a2f6e20857cbf0ebe0484"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-e8691fa92f2b3af437176667b1e8d26aaba661d9d07040cdeddd933b0c2b32c6a2946d9b6b14f29ea75167ce56a1405127a01c8c7c2a2f6e20857cbf0ebe0484"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-e8691fa92f2b3af437176667b1e8d26aaba661d9d07040cdeddd933b0c2b32c6a2946d9b6b14f29ea75167ce56a1405127a01c8c7c2a2f6e20857cbf0ebe0484"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-e8691fa92f2b3af437176667b1e8d26aaba661d9d07040cdeddd933b0c2b32c6a2946d9b6b14f29ea75167ce56a1405127a01c8c7c2a2f6e20857cbf0ebe0484"' :
                                        'id="xs-injectables-links-module-UsersModule-e8691fa92f2b3af437176667b1e8d26aaba661d9d07040cdeddd933b0c2b32c6a2946d9b6b14f29ea75167ce56a1405127a01c8c7c2a2f6e20857cbf0ebe0484"' }>
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
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
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
                                    <a href="injectables/BcryptService.html" data-type="entity-link" >BcryptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingService.html" data-type="entity-link" >HashingService</a>
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