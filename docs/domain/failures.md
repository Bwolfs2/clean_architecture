---
sidebar_position: 4
---

# Failures

Todo: definitios of Failure

```dart
class NoDataFound extends Failure {}

abstract class NoInternetConnection extends Failure {
  NoInternetConnection() : super(errorMessage: 'No Internet Connection');
}

class MovieNowPlayingNoInternetConnection extends NoInternetConnection {}

```

Normaly i have a core failure definition:

```dart
abstract class Failure implements Exception {
  final String errorMessage;

  Failure({
    StackTrace? stackTrace,
    String? label,
    dynamic exception,
    this.errorMessage = '',
  }) {
    if (stackTrace != null) {
      debugPrintStack(label: label, stackTrace: stackTrace);
    }

    //In this point you can call your external service like Firebase Crashlytics or Sentry
    ErrorReport.externalFailureError(exception, stackTrace, label);
  }
}

class UnknownError extends Failure {
  final dynamic exception;
  final StackTrace? stackTrace;
  final String? label;

  UnknownError({
    this.label,
    this.exception,
    this.stackTrace,
    super.errorMessage = 'Unknown Error',
  }) : super(
          stackTrace: stackTrace,
          label: label,
          exception: exception,
        );
}

```