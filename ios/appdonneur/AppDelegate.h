#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import <React/RCTLinkingManager.h>
#import "RNAppAuthAuthorizationFlowManager.h"
#import "RNNotifications.h"

@interface AppDelegate : RCTAppDelegate <RNAppAuthAuthorizationFlowManager>

@property(nonatomic, weak) id<RNAppAuthAuthorizationFlowManagerDelegate> authorizationFlowManagerDelegate;

@end
