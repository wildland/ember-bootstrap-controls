# Changelog
All notable changes to this project will be documented in this file.

## [3.0.1] - 2020-03-13
### Fixed
  * Fixed a bug where initial sort was inconsistent with route reloads.
### Security
  * Updated dependencies.

## [3.0.0] - 2020-02-06
### Changed
  * Updated to ember-cli 3.12
  * due to breakage in `elementId` being specified, all components were switched to use `id`
  * Refactored many components to use let helpers to reduce duplication

## [2.0.0] - 2019-10-14
### Added
  * `ember-inputmask` ([@jir-f][])
### Changed
  * Updated `ember-tui-editor` to 0.1.5 ([@jir-f][])
  * Updated `bootstrap-input-mask`
  * Updated `bootstrap-currency-input`
### Removed
  * `ember-text-mask-addons` ([@jir-f][])

## [1.1.0] - 2019-06-27
### Added
  * modals now supports `afterHidden`. ([@jweakley][])
  * `bootstrap/simple-form` now supports `submitAction`. ([@jweakley][])
  * `bootstrap/buttons` ([@jir-f][])
  * `bootstrap/tables` ([@jir-f][])
  * `modals/ember-model` prototype added. ([@jweakley][])
  * table body now additionally yields `rowData`. ([@jweakley][])
  * `bootstrap-inputs/markdown`. ([@jweakley][]) ([@flarinerin][])
### Changed
  * Set `isDevelopingAddon` to false. ([@jweakley][])
  * Commented out failing freestyle examples. ([@jweakley][])
### Deprecated
### Removed
### Fixed
  * Updated install instructions. ([@jweakley][])
  * Added back Unreleased section to changelog. ([@jweakley][])
  * Buttons now properly support disabled. ([@jweakley][])
  * Fixed a bug where colspan on tables could be invalid. ([@jweakley][])
  * Fixed a bug where modal close button was not rendering. ([@jweakley][])
### Security
  * Updated dependencies.

## [1.1.0-beta.4] - 2019-05-10
### Added
  * table body now additionally yields `rowData`. ([@jweakley][])
### Changed
### Deprecated
### Removed
### Fixed
  * Fixed a bug where colspan on tables could be invalid. ([@jweakley][])
### Security

## [1.1.0-beta.3] - 2019-04-30
### Added
### Changed
### Deprecated
### Removed
### Fixed
  * Buttons now properly support disabled. ([@jweakley][])
### Security

## [1.1.0-beta.2] - 2019-04-30
### Added
  * `modals/ember-model` prototype added. ([@jweakley][])
### Changed
### Deprecated
### Removed
### Fixed
### Security

## [1.1.0-beta] - 2019-04-12
### Added
  * `bootstrap/simple-form` now supports `submitAction`. ([@jweakley][])
  * `bootstrap/buttons` ([@jir-f][])
  * `bootstrap/tables` ([@jir-f][])
### Changed
  * Set `isDevelopingAddon` to false. ([@jweakley][])
  * Commented out failing freestyle examples. ([@jweakley][])
### Deprecated
### Removed
### Fixed
  * Updated install instructions. ([@jweakley][])
  * Added back Unreleased section to changelog. ([@jweakley][])
### Security
  * Updated dependencies.

## [1.0.0] - 2019-01-24
### Added
  * Out of beta!
### Changed
### Deprecated
### Removed
### Fixed
### Security

## [1.0.0-beta.2] - 2019-01-23
### Added
  * Added route actions for `sorted` and `pagination` Mixins. ([@jweakley][])
  * `bootstrap/simple-form` now supports disabled and delegates disabled status down to inputs. ([@jweakley][])
  * Most inputs now support `formDisabled` and `disabled`. ([@jweakley][])
  * `bootstrap-date-picker` now supported `disabled`. ([@jweakley][])
### Changed
  * Removed deprecation warning from `bootstrap-button`. ([@jweakley][])
### Deprecated
### Removed
### Fixed
### Security

## [1.0.0-beta.1] - 2019-01-10
### Added
  * `bootstrap/simple-form` now has button components. ([@jweakley][])
  * Search input now support `onInput`. ([@jweakley][])
  * [#219](https://github.com/wildland/ember-bootstrap-controls/issues/219): Added an edit form that can self manage state for you. ([@jweakley][])
  * [#227](https://github.com/wildland/ember-bootstrap-controls/issues/227): All inputs support onChange. ([@jweakley][])
### Changed
 * Updated tests to newest qunit patterns. ([@jweakley][])
 * Forms now share inputs as a component. ([@jweakley][])
 * Updated various devDependencies. ([@jweakley][])
### Deprecated
### Removed
 * Removed yarn. Updated to npm 6.4.x instead.
### Fixed
  * [#226](https://github.com/wildland/ember-bootstrap-controls/issues/226): Fixed a bug where pagination mixin would not set queryParams. ([@jweakley][])
### Security
  * Updated lodash


## [1.0.0-beta.0] - 2018-09-08
### Added
  * [#165](https://github.com/wildland/ember-bootstrap-controls/issues/165): Added bootstrap modal. ([@chadzink][], [@jweakley][])
  * [#142](https://github.com/wildland/ember-bootstrap-controls/issues/142): Added contribution guidelines and documentations. Also added blueprints. ([@jweakley][])
  * [#145](https://github.com/wildland/ember-bootstrap-controls/issues/145): Added new email type input. ([@jweakley][])
  * [#146](https://github.com/wildland/ember-bootstrap-controls/issues/146): Added new password type input. ([@Nathan-O][])
  * [#157](https://github.com/wildland/ember-bootstrap-controls/issues/157): Added new url type input. ([@jweakley][])
  * [#148](https://github.com/wildland/ember-bootstrap-controls/issues/148): Added new text type input. ([@harokevin][])
  * [#154](https://github.com/wildland/ember-bootstrap-controls/issues/154): Added new range type input. ([@flarinerin][])
  * [#147](https://github.com/wildland/ember-bootstrap-controls/issues/147): Added new search type input. ([@harokevin][])
  * [#153](https://github.com/wildland/ember-bootstrap-controls/issues/153): Added new radio and radio group inputs. ([@jweakley][])
  * [#149](https://github.com/wildland/ember-bootstrap-controls/issues/149): Added new checkbox input. ([@jweakley][])
  * [#155](https://github.com/wildland/ember-bootstrap-controls/issues/155): Added new tel type input. ([@Nathan-O][])
  * [#152](https://github.com/wildland/ember-bootstrap-controls/issues/152): Added new number type input. ([@jweakley][])
  * Added new simple select. ([@jweakley][])
  * Updated route mixin to better handle adjustable page sizes and associated documentation. ([@jweakley][])
  * [#151](https://github.com/wildland/ember-bootstrap-controls/issues/151): Added new date type input. ([@Nathan-O][])
  * [#156](https://github.com/wildland/ember-bootstrap-controls/issues/156): Added new time type input. ([@harokevin][])
  * [#202](https://github.com/wildland/ember-bootstrap-controls/issues/202): Added a new floating label input based on text input. ([@flarinerin][])
  * [#199](https://github.com/wildland/ember-bootstrap-controls/issues/199): Added yarn support. ([@jweakley][])
  * [#215](https://github.com/wildland/ember-bootstrap-controls/issues/215): Added a simple-form component that contains all the inputs. ([@jweakley][])
### Changed
  * Updated `bootstrap-button` to reduce code and take advantage of `drop()` from ember concurrency. ([@jweakley][])
  * Updated bootstrap-inputs documentation to clarify how to use inputs. ([@flarinerin][])
  * Updated branding to better reflect Wildland UX style - favicon, colors, fonts ([@flarinerin][])
### Deprecated
  * Added a deprecation warning to `bootstrap-button` in favor of a new upcoming button. ([@jweakley][])
### Removed
### Fixed
  * Updated instructions on running the Dummy App locally. ([@Nathan-O][])
  * Updated testing instructions in README.md. ([@jweakley][])
  * Updated install instructions in README.md. ([@jweakley][])
  * [#199](https://github.com/wildland/ember-bootstrap-controls/issues/199): Added `yarn` for dependency management. ([@jweakley][])
  * Updated npm packages. ([@jweakley][])
  * [#190](https://github.com/wildland/ember-bootstrap-controls/issues/190): Updated tests. ([@harokevin][])
  * [#207](https://github.com/wildland/ember-bootstrap-controls/issues/207): Temporary fix for performance. ([@jweakley][])
### Security

[@jweakley]: https://github.com/jweakley
[@Nathan-O]: https://github.com/Nathan-O
[@harokevin]: https://github.com/harokevin
[@flarinerin]: http://github.com/flarinerin
[@chadzink]: https://github.com/chadzink
[@jir-f]: https://github.com/jir-f
